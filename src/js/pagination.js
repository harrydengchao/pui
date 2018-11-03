var puiPagination = (function(window, $) {
  function Pagination(params) {
    this.wrapperSelector = params.wrapperSelector;
    this.handlePrevCallback = params.handlePrevCallback;
    this.handleNextCallback = params.handleNextCallback;
    this.currentPage = params.currentPage;
    this.totalPage = params.totalPage;

    this.$wrapper = $(this.wrapperSelector);
  }

  // 更新翻页器显示
  Pagination.prototype.update = function(pagination) {
    if (!pagination) return null;
    this.currentPage = pagination.currentPage;
    this.totalPage = pagination.totalPage;
    this.$wrapper.find('.pui-pagination__content').text(this.currentPage + '/' + this.totalPage);
  }

  // 绑定 点击上一页事件
  Pagination.prototype.bindPrevClick = function(event) {
    this.handlePrevCallback({currentPage: this.currentPage, totalPage: this.totalPage});
  }

  // 绑定 点击下一页事件
  Pagination.prototype.bindNextClick = function(event) {
    this.handleNextCallback({currentPage: this.currentPage, totalPage: this.totalPage});
  }

  // 初始化
  Pagination.prototype.init = function() {
    this.$wrapper.on('click', '.pui-pagination__prev', this.bindPrevClick.bind(this));
    this.$wrapper.on('click', '.pui-pagination__next', this.bindNextClick.bind(this));
    this.update({currentPage: this.currentPage, totalPage: this.totalPage});
  }

  return Pagination;
})(window, $);
