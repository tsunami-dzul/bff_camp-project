import { getCurrentPage } from './getCurrentPage';

export const generateProductsByCategoryIdUrl = (categoryId: string, offset: number, limit: number) => {
  const queryParams = new URLSearchParams();

  queryParams.set('searchCriteria[filter_groups][0][filters][0][field]', 'category_id');
  queryParams.set('searchCriteria[filter_groups][0][filters][0][value]', `${categoryId}`);
  queryParams.set('searchCriteria[filter_groups][0][filters][0][condition_type]', 'eq');

  if (offset) {
    queryParams.set('searchCriteria[currentPage]', getCurrentPage(offset, limit).toString());
  }
  if (limit) {
    queryParams.set('searchCriteria[pageSize]', limit.toString());
  }

  return `products?${queryParams.toString()}`;
};
