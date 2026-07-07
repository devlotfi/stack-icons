export interface Icon {
  id: string;
  displayName: string;
}

export interface IconsConfig {
  $schema?: string;
  items: Icon[];
}
