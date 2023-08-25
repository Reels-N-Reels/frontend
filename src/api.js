const BASE_URL = "https://reelsnreels.onrender.com";

export const apiEndpoints = {
  getBlogPosts: `${BASE_URL}/api/blogPosts`,
  createBlogPost: `${BASE_URL}/api/blogPosts`,
  updateBlogPost: (id) => `${BASE_URL}/api/blogPosts/${id}`,
  deleteBlogPost: (id) => `${BASE_URL}/api/blogPosts/${id}`,
  getBlogPostById: (id) => `${BASE_URL}/api/blogPosts/${id}`,
  getJobPosts: `${BASE_URL}/api/jobPosts`,
  createJobPost: `${BASE_URL}/api/jobPosts`,
  updateJobPost: (id) => `${BASE_URL}/api/jobPosts/${id}`,
  deleteJobPost: (id) => `${BASE_URL}/api/jobPosts/${id}`,
  getJobPostById: (id) => `${BASE_URL}/api/jobPosts/${id}`,
  loginAdmin: `${BASE_URL}/admin/login`,
  logoutAdmin: `${BASE_URL}/admin/logout`,
};
