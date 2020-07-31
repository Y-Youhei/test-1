
      $(function(){
         // #で始まるアンカーをクリックした場合に処理
         $('a[href^=#]').click(function() {
            // スクロールの速度
            let speed = 400; // ミリ秒
            // アンカーの値取得
            let href= $(this).attr("href");
            // 移動先を取得
            let target = $(href == "#" || href == "" ? 'html' : href);
            // 移動先を数値で取得
            let position = target.offset().top;
            // スムーススクロール
            $('body,html').animate({scrollTop:position}, speed, 'swing');
            return false;
         });
      });
