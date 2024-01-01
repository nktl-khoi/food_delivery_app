export class UserRole {
  static USER = 'USER';
  static SHOP_OWNER = 'SHOP_OWNER';
  static ADMIN = 'ADMIN';
}

export class OrderStatus {
  static PENDING = 'PENDING';
  static ON_THE_WAY = 'ON_THE_WAY';
  static DELIVERED = 'DELIVERED';
  static CANCELED = 'CANCELED';
}

export class AccountStatus {
  static BANNED = 'BANNED';
  static NONE = 'NONE';
  static WARNING = 'WARNING';
}

export class ReportStatus {
  static DONE = 'DONE';
  static READ = 'READ';
  static UN_READ = 'UN_READ';
}

export class NotiStatus {
  static READ = 'READ';
  static UN_READ = 'UN_READ';
}
