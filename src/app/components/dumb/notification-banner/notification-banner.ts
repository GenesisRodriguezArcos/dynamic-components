import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notification } from '../../../models/notification.model';

@Component({
  selector: 'app-notification-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-banner.html',
  styleUrl: './notification-banner.scss'
})
export class NotificationBannerComponent implements OnInit {
  @Input() notification!: Notification;
  @Input() autoDismiss: boolean = false;
  @Input() dismissTimeout: number = 5000;
  @Output() notificationDismissed = new EventEmitter<number>();
  @Output() notificationRead = new EventEmitter<number>();

  ngOnInit(): void {
    if (this.autoDismiss) {
      setTimeout(() => {
        this.dismiss();
      }, this.dismissTimeout);
    }
  }

  dismiss(): void {
    this.notificationDismissed.emit(this.notification.id);
  }

  markAsRead(): void {
    this.notificationRead.emit(this.notification.id);
  }

  getTypeClass(): string {
    return `notification-${this.notification.type}`;
  }

  getIcon(): string {
    switch (this.notification.type) {
      case 'success': return '✓';
      case 'warning': return '⚠';
      case 'error': return '✗';
      case 'info': return 'ℹ';
      default: return '•';
    }
  }
}
