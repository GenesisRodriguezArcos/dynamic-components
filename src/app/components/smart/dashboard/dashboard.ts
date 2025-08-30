import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '../../dumb/user-card/user-card';
import { ProductCardComponent } from '../../dumb/product-card/product-card';
import { NotificationBannerComponent } from '../../dumb/notification-banner/notification-banner';
import { User } from '../../../models/user.model';
import { Product } from '../../../models/product.model';
import { Notification } from '../../../models/notification.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, UserCardComponent, ProductCardComponent, NotificationBannerComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  products: Product[] = [];
  notifications: Notification[] = [];
  selectedUser: User | null = null;
  selectedProduct: Product | null = null;
  cartItems: Product[] = [];

  ngOnInit(): void {
    this.loadMockData();
  }

  loadMockData(): void {
    // Mock users
    this.users = [
      {
        id: 1,
        name: 'Fabrizio Alonso',
        email: 'Fabrizio.2023@gmail.com',
        avatar: 'https://via.placeholder.com/60x60/4CAF50/FFFFFF?text=JD',
        role: 'Admin',
        isActive: true,
        lastLogin: new Date('2024-01-15T10:30:00')
      },
      {
        id: 2,
        name: 'Genesis de los Angeles',
        email: 'arcosgenesis.2006@gmail.com',
        avatar: 'https://via.placeholder.com/60x60/2196F3/FFFFFF?text=JS',
        role: 'Manager',
        isActive: true,
        lastLogin: new Date('2024-01-14T15:45:00')
      },
      {
        id: 3,
        name: 'Mario ',
        email: 'mari.gonza@gmail.com',
        avatar: 'https://via.placeholder.com/60x60/FF9800/FFFFFF?text=BJ',
        role: 'User',
        isActive: false,
        lastLogin: new Date('2024-01-10T09:15:00')
      }
    ];

    // Mock products
    this.products = [
      {
        id: 1,
        name: 'Laptop Pro',
        description: 'High-performance laptop for professionals',
        price: 1299.99,
        image: 'https://via.placeholder.com/300x200/9C27B0/FFFFFF?text=Laptop',
        category: 'Electronics',
        inStock: true,
        rating: 4.5
      },
      {
        id: 2,
        name: 'Wireless Headphones',
        description: 'Premium noise-canceling headphones',
        price: 299.99,
        image: 'https://via.placeholder.com/300x200/607D8B/FFFFFF?text=Headphones',
        category: 'Audio',
        inStock: true,
        rating: 4.8
      },
      {
        id: 3,
        name: 'Smart Watch',
        description: 'Feature-rich smartwatch with health tracking',
        price: 399.99,
        image: 'https://via.placeholder.com/300x200/795548/FFFFFF?text=Watch',
        category: 'Wearables',
        inStock: false,
        rating: 4.2
      }
    ];

    // Mock notifications
    this.notifications = [
      {
        id: 1,
        message: 'New user registration: Alice Cooper',
        type: 'info',
        timestamp: new Date(),
        isRead: false
      },
      {
        id: 2,
        message: 'Product "Laptop Pro" is running low on stock',
        type: 'warning',
        timestamp: new Date(Date.now() - 300000),
        isRead: false
      },
      {
        id: 3,
        message: 'System backup completed successfully',
        type: 'success',
        timestamp: new Date(Date.now() - 600000),
        isRead: true
      }
    ];
  }

  onUserSelected(user: User): void {
    this.selectedUser = user;
    this.addNotification(`User ${user.name} selected`, 'info');
  }

  onUserStatusChanged(event: { userId: number; isActive: boolean }): void {
    const user = this.users.find(u => u.id === event.userId);
    if (user) {
      user.isActive = event.isActive;
      this.addNotification(
        `User ${user.name} ${event.isActive ? 'activated' : 'deactivated'}`,
        event.isActive ? 'success' : 'warning'
      );
    }
  }

  onProductSelected(product: Product): void {
    this.selectedProduct = product;
    this.addNotification(`Product ${product.name} selected`, 'info');
  }

  onAddToCart(product: Product): void {
    this.cartItems.push(product);
    this.addNotification(`${product.name} added to cart`, 'success');
  }

  onNotificationDismissed(notificationId: number): void {
    this.notifications = this.notifications.filter(n => n.id !== notificationId);
  }

  onNotificationRead(notificationId: number): void {
    const notification = this.notifications.find(n => n.id === notificationId);
    if (notification) {
      notification.isRead = true;
    }
  }

  private addNotification(message: string, type: 'success' | 'warning' | 'error' | 'info'): void {
    const newNotification: Notification = {
      id: Date.now(),
      message,
      type,
      timestamp: new Date(),
      isRead: false
    };
    this.notifications.unshift(newNotification);
  }

  getActiveUsersCount(): number {
    return this.users.filter(u => u.isActive).length;
  }

  getTotalProductsValue(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }

  getUnreadNotificationsCount(): number {
    return this.notifications.filter(n => !n.isRead).length;
  }

  getCartTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
}
