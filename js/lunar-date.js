// ZhuoSu — Lunar Date Conversion
// 将 .post-meta time 元素转换为：2026-08-18 • 丙午年七月初六 • 片刻即毕
// 脚本以 defer 加载，DOM 就绪后立即执行；Pjax 切换后由 zs:pjax:loaded 事件重新转换
(function () {
  'use strict';

  function convertLunarDates() {
    var timeEls = document.querySelectorAll('.post-meta time');
    timeEls.forEach(function (el) {
      var datetime = el.getAttribute('datetime');
      if (!datetime) return;

      var parts = datetime.split('-');
      if (parts.length < 3) return;
      var y = parseInt(parts[0], 10);
      var m = parseInt(parts[1], 10);
      var d = parseInt(parts[2], 10);

      try {
        var solar = Solar.fromYmd(y, m, d);
        var lunar = solar.getLunar();
        var lunarStr = lunar.getYearInGanZhi() + '年' + lunar.getMonthInChinese() + lunar.getDayInChinese();

        // 从同级的阅读时长 span 读取描述
        var parent = el.parentNode;
        var readingEl = parent.querySelector('.meta-reading');
        var readingDesc = readingEl ? readingEl.textContent : '';
        var dotEl = parent.querySelector('.meta-dot');

        el.textContent = datetime + ' \u2022 ' + lunarStr + ' \u2022 ' + readingDesc;
        if (readingEl) readingEl.style.display = 'none';
        if (dotEl) dotEl.style.display = 'none';
      } catch (e) {
        // 超出农历支持范围时保留原始日期
      }
    });
  }

  window.convertLunarDates = convertLunarDates;
  document.addEventListener('zs:pjax:loaded', convertLunarDates);

  // defer 加载时 DOM 已就绪，立即执行
  convertLunarDates();
})();
