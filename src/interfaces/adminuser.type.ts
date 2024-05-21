export interface AdminUserData {
  ID: number;
  email: string;
  Role: string;
  'Created at': string;
}

export const buttonsData = [
  { label: 'All', badgeVariant: 'business', badgeCount: 81, buttonVariant: 'business_ghost' },
  { label: 'Super Admin', badgeVariant: 'individuals', badgeCount: 19, buttonVariant: 'individuals_ghost' },
  { label: 'MHRSD Admin', badgeVariant: 'individuals', badgeCount: 22, buttonVariant: 'individuals_ghost' },
  { label: 'MHRSD Employee', badgeVariant: 'individuals', badgeCount: 30, buttonVariant: 'individuals_ghost' },
  { label: 'Inspector', badgeVariant: 'individuals', badgeCount: 10, buttonVariant: 'individuals_ghost' },
];
