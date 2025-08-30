import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss'
})
export class UserCardComponent {
  @Input() user!: User;
  @Input() showActions: boolean = true;
  @Output() userSelected = new EventEmitter<User>();
  @Output() userStatusChanged = new EventEmitter<{ userId: number; isActive: boolean }>();

  onUserSelect(): void {
    this.userSelected.emit(this.user);
  }

  onStatusToggle(): void {
    this.userStatusChanged.emit({
      userId: this.user.id,
      isActive: !this.user.isActive
    });
  }

  getStatusClass(): string {
    return this.user.isActive ? 'status-active' : 'status-inactive';
  }

  getRoleBadgeClass(): string {
    switch (this.user.role.toLowerCase()) {
      case 'admin': return 'role-admin';
      case 'manager': return 'role-manager';
      case 'user': return 'role-user';
      default: return 'role-default';
    }
  }
}
