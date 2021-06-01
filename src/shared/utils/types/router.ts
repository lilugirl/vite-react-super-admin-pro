export interface IRoute {
  from?: string;
  to?: string;
  path?: string;
  component?: any;
  title?: string;
  subtitle?: string;
  authority?: string[];
  redirectPath?: string;
}
