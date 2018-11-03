/**
 * pui Modal 核心
 * @param [Object] {wrapperSelector, }
 */
var puiModal = (function(window, $) {
  function Modal(params) {
    // modal 的父级元素
    this.wrapperSelector = params.wrapperSelector;
    // 隐藏回调
    this.handleCloseCallback = params.handleCloseCallback;
    // 确认回调
    this.handleConfirmCallback = params.handleConfirmCallback;

    this.$wrapper = $(this.wrapperSelector);
  }

  // 打开
  Modal.prototype.open = function() {
    this.$wrapper.find('.pui-modal__backdrop').show();
    this.$wrapper.find('.pui-modal').show();
  }

  // 隐藏
  Modal.prototype.close = function() {
    this.$wrapper.find('.pui-modal').hide();
    this.$wrapper.find('.pui-modal__backdrop').hide();
  }

  // 删除
  Modal.prototype.remove = function() {
    this.$wrapper.find('.pui-modal').remove();
    this.$wrapper.find('.pui-modal__backdrop').remove();
  }

  // 关闭事件
  Modal.prototype.bindModalClose = function(event) {
    this.close();
    this.handleCloseCallback(event);
  }

  // 确认事件
  Modal.prototype.bindModalConfirm = function(event) {
    this.close();
    this.handleConfirmCallback(event);
  }

  // 初始化
  Modal.prototype.init = function() {
    this.$wrapper.on('click', '.pui-modal__close', this.bindModalClose.bind(this));
    this.$wrapper.on('click', '.pui-button__cacel', this.bindModalClose.bind(this));
    this.$wrapper.on('click', '.pui-button__confirm', this.bindModalConfirm.bind(this));
  }

  return Modal;
})(window, $);
