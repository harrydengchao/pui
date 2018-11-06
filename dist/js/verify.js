/**
 * 验证码 方法类
 * @param [Object] {}
 * wrapperSelector: 容器选择器[class | id]
 * imageSelector: 验证码图片选择器[class | id]
 * handleChecked: 点选图片时的回调方法
 */
var Verify = (function(window, $) {
  function Verify(params) {
    // 容器
    this.wrapperSelector = params.wrapperSelector;
    // 验证码图片
    this.imageSelector = params.imageSelector;
    // 选中时的方法回调
    this.handleChecked = params.handleChecked;
    // 选中时的icon
    this.checkedSelector = '.pui-verify__checked';

    this.$wrapper = $(this.wrapperSelector);
    this.count = 0;
    this.init();
  }

  Verify.prototype.init = function() {
    var that = this;
    this.$wrapper.on('click', this.imageSelector, function(event) {
      var positionX = event.pageX- $(this).offset().left; //获取当前鼠标相对img的X坐标  
      var positionY = event.pageY- $(this).offset().top; //获取当前鼠标相对img的Y坐标  
      that.handleChecked({x: positionX, y: positionY});
      that.count += 1;
      var wrapperPaddingTop = that.$wrapper.css('padding-top').replace(/px$/, '') * 1;
      var wrapperPaddingLeft = that.$wrapper.css('padding-left').replace(/px$/, '') * 1;
      that.pasteChecked(that.count, {x: positionX + wrapperPaddingLeft, y: positionY + wrapperPaddingTop});
    })
  }

  Verify.prototype.pasteChecked = function(num, position) {
    var tpl = '<div class="' + this.checkedSelector.replace(/^\.|#/, '') + '" style="top: ' + position.y + 'px; left: ' + position.x + 'px;">' + num + '</div>';
    this.$wrapper.append(tpl);
  }

  Verify.prototype.reset = function() {
    this.count = 0;
    this.$wrapper.find(this.checkedSelector).remove();
  }

  return Verify;
})(window, $);
