export const getReportData = (module: string, resource?: string) => ({
  f_module: module,
  f_resource: resource || module,
  f_type: (!resource || resource === module) ? 1 : 4,
});
