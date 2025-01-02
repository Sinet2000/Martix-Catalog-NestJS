export class PaginationQueryParser {
  /**
   * Parses the filters query string into a MongoDB-compatible filter object.
   * @param filters A string representing filters, e.g., "price>100,stock>=10,freeform@='TEST text to search, by!!'"
   * @returns A filter object compatible with MongoDB.
   */
  static parseFilters(filters?: string): Record<string, any> {
    if (!filters) return {};

    const filterObj: Record<string, any> = {};

    // Match filters using regex: field operator value
    const filterRegex = /([\w]+)(<=|>=|!=|>|<|=|@=)'?([^,]*)'?,?/g;
    let match;

    while ((match = filterRegex.exec(filters)) !== null) {
      const [, field, operator, value] = match;

      switch (operator) {
        case '>':
          filterObj[field] = {
            $gt: isNaN(Number(value)) ? value : Number(value),
          };
          break;
        case '<':
          filterObj[field] = {
            $lt: isNaN(Number(value)) ? value : Number(value),
          };
          break;
        case '>=':
          filterObj[field] = {
            $gte: isNaN(Number(value)) ? value : Number(value),
          };
          break;
        case '<=':
          filterObj[field] = {
            $lte: isNaN(Number(value)) ? value : Number(value),
          };
          break;
        case '!=':
          filterObj[field] = { $ne: value };
          break;
        case '@=':
          filterObj[field] = { $regex: value, $options: 'i' }; // Case-insensitive regex
          break;
        default:
          filterObj[field] = value;
      }
    }

    return filterObj;
  }

  /**
   * Parses the sorts query string into a MongoDB-compatible sort object.
   * @param sorts A string representing sorts, e.g., "price,-createdAt"
   * @returns A sort object compatible with MongoDB.
   */
  static parseSorts(sorts: string): Record<string, 1 | -1> {
    if (!sorts) return { createdAt: -1 }; // Default sort

    const sortObj: Record<string, 1 | -1> = {};
    sorts.split(',').forEach((sort) => {
      const direction = sort.startsWith('-') ? -1 : 1;
      const field = sort.startsWith('-') ? sort.slice(1) : sort;
      sortObj[field] = direction;
    });

    return sortObj;
  }
}
