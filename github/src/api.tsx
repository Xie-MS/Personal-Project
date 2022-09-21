//import username

const api = {
    hostname: `https://api.github.com/repos/Xie-Ms/Personal-Project`,
    async getLabels() {
      const response = await fetch(`${this.hostname}/labels`);
      return await response.json();
    },
    async getListIssuesState() {
      const response = await fetch(`${this.hostname}/issues`);
      return await response.json();
    },
    async Pagination(per_page:number|string, paging:number|string) {
      const response = await fetch(
        `${this.hostname}/issues?per_page=${per_page}&page=${paging}`
      );
      return await response.json();
    },
    async filiter(userName:string) {
      const response = await fetch(`${this.hostname}/issues?assignee=${userName}`);
      return await response.json();
    },
    async getIssues() {
        const response = await fetch(`${this.hostname}/issues/comments`);
        return await response.json();
    },
    async getTimeLine() {
      const response = await fetch(`${this.hostname}/issues/1/timeline`);
      return await response.json();
    },
    async getIssuesComments() {
      const response = await fetch(`${this.hostname}/issues/comments/1250060561`);
      return await response.json();
    },
    async getNewIssueState() {
        const response = await fetch(`${this.hostname}/issues/labels/enhancement`);
        return await response.json();
      },
  };
  
  export default api;
  