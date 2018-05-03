/**
 * Created by Administrator on 2018/5/2 0002.
 */
var method={
    alert:function(opts){
        var defaultValue = {
            title: '',//标题
            content: '',//内容  文字 || html
            height: 50,//默认屏幕（父级）的50%
            width:80 ,//默认屏幕（父级）的80%
            type: 'alert-default',//弹框类型
            effect: 'infoStart',//出现效果，默认下跌落
            delayTime: 500,//效果延时时间，默认.5s
            autoClose: false,//自动关闭
            autoTime: 2000, //自动关闭时间默认2s
            autoEffect: 'default',//关闭效果
            ok: '好的',
            borderRadius:'4', //边框圆角
            okCallback: function(){},//确定回调
            cancel: '取消',
            imgsrc:'img/xiaomei_dialog.jpg',
            cancelCallback: function(){},//取消回调
            before : function() {
                //console.log('before')
            },
            close: function() {
                //console.log('close')
            },
            blankclose: false//空白处点击关闭
        }

        for (i in defaultValue) {
            if (opts[i] === undefined) {
                opts[i] = defaultValue[i]
            }
        }

        //opts.before && opts.before()

        var alertHtml = [
            '<section class="alert-main" id="alertMain">',
            '<div class="alert-mask li-opacity" id="alertMask">',
            '<div class="alert-content '+ opts.type +'" id="alertContent">',
            '<div class="dialog_xiaomei_img"> <img src=" '+ opts.imgsrc +' "></div>',
            '<div class="dialog_main">',
            '<div class="dialog-content"> '+opts.content+' </div>',
            '<div class="dialog-ft"><div class="dialog_footer">'+opts.ok+'</div></div></div></div>',
            '</div></div></section>'
        ]

        $('body').append(alertHtml.join(''))

        //console.log('alertHtml',alertHtml.join(''))

        var $alertContent = $('#alertContent'),
            $alertMain = $('#alertMain');
        $alertContent.css({
            'position': 'fixed',
             'z-index': 9999,
            'width': opts.width + '%',
            'max-width': '300px',
            'top': '50%',
            'left': '50%',
             '-webkit-transform': 'translate(-50%, -50%)',
            'transform': 'translate(-50%, -50%)',
            'text-align': 'center',
            'border-radius': opts.borderRadius+'px',
        })

        $('.li-opacity').css({
            '-webkit-animation-duration' : opts.delayTime/1000 + 's'
        })

        var effect = {
            'fadeIn': 'top',
            'fadeInStart': '-100%',
            'fadeInValue': (100 - opts.height)/2 + '%',
            'sideLeft': 'left',
            'sideLeftStart': '-100%',
            'sideLeftValue': (100 - opts.width)/2 + '%',
            'scale': '-webkit-transform',
            'scaleStart': 'scale(0)',
            'scaleValue': 'scale(1)',
            'info': '-webkit-transform',
            'infoStart': 'scale(1.2)',
            'infoValue': 'scale(1)'
        }

        setTimeout(function(){
            $alertContent.css(effect[opts.effect],effect[opts.effect + 'Start']).addClass('alert-show')

            setTimeout(function(){
                $alertContent.css(effect[opts.effect], effect[opts.effect + 'Value'])
                opts.close && opts.close()
            },1000)
        },opts.delayTime)

        if(opts.blankclose) {
            var clicktype= 'click'?'click':'tap';
            $('.dialog_footer').on(clicktype,function(event){
                $alertMain.remove()
                opts.close && opts.close()
                event.stopPropagation()
                event.preventDefault()
            })
        }

        if(opts.autoClose && opts.autoTime > 0) {
            setTimeout(function(){$alertMain.remove()},opts.autoTime)
            opts.close && opts.close()
        }
    },
    confirm:function(opts){
        var defaultValue = {
            title: '',//标题
            content: '',//内容  文字 || html
            height: 50,//默认屏幕（父级）的50%
            width:80 ,//默认屏幕（父级）的80%
            type: 'confirm-default',//弹框类型
            effect: 'infoStart',//出现效果，默认下跌落
            delayTime: 500,//效果延时时间，默认.5s
            autoClose: false,//自动关闭
            autoTime: 2000, //自动关闭时间默认2s
            autoEffect: 'default',//关闭效果
            ok: '好的',
            borderRadius:'4', //边框圆角
            okCallback: function(){},//确定回调
            cancel: '取消',
            imgsrc:'img/xiaomei_dialog.jpg',
            cancelCallback: function(){},//取消回调
            before : function() {
            },
            close: function() {
            },
            blankclose: false//空白处点击关闭
        }

        for (i in defaultValue) {
            if (opts[i] === undefined) {
                opts[i] = defaultValue[i]
            }
        }

        opts.before && opts.before()

        var alertHtml = [
            '<section class="alert-main" id="alertMain">',
            '<div class="alert-mask li-opacity" id="alertMask">',
            '<div class="alert-content '+ opts.type +'" id="alertContent">',
            '<div class="dialog_xiaomei_img"> <img src=" '+ opts.imgsrc +' "></div>',
            '<div class="dialog_main">',
            '<div class="dialog-content"> '+opts.content+' </div>',
            '<div class="dialog-ft"><div class="dialog_btn">'+opts.ok+'</div><div class="dialog_btn">'+opts.cancel+'</div></div></div></div>',
            '</div></div></section>'
        ]

        $('body').append(alertHtml.join(''))

        //console.log('alertHtml',alertHtml.join(''))

        var $alertContent = $('#alertContent'),
            $alertMain = $('#alertMain');
        $alertContent.css({
            'position': 'fixed',
            'z-index': 9999,
            'width': opts.width + '%',
            'max-width': '300px',
            'top': '50%',
            'left': '50%',
            '-webkit-transform': 'translate(-50%, -50%)',
            'transform': 'translate(-50%, -50%)',
            'text-align': 'center',
            'border-radius': opts.borderRadius+'px',
        })

        $('.li-opacity').css({
            '-webkit-animation-duration' : opts.delayTime/1000 + 's'
        })

        var effect = {
            'fadeIn': 'top',
            'fadeInStart': '-100%',
            'fadeInValue': (100 - opts.height)/2 + '%',
            'sideLeft': 'left',
            'sideLeftStart': '-100%',
            'sideLeftValue': (100 - opts.width)/2 + '%',
            'scale': '-webkit-transform',
            'scaleStart': 'scale(0)',
            'scaleValue': 'scale(1)',
            'info': '-webkit-transform',
            'infoStart': 'scale(1.2)',
            'infoValue': 'scale(1)'
        }

        setTimeout(function(){
            $alertContent.css(effect[opts.effect],effect[opts.effect + 'Start']).addClass('alert-show')

            setTimeout(function(){
                $alertContent.css(effect[opts.effect], effect[opts.effect + 'Value'])
                opts.close && opts.close()
            },1000)
        },opts.delayTime)

        if(opts.blankclose) {
            var clicktype= 'click'?'click':'tap';
            //取消
            $('.dialog-ft>div:nth-child(2)').on(clicktype,function(event){
                opts.cancelCallback();
                $alertMain.remove()
                opts.close && opts.close()
                event.stopPropagation()
                event.preventDefault()
            })
            //确定
            $('.dialog-ft>div:nth-child(1)').on(clicktype,function(event){
                opts.okCallback();
                $alertMain.remove()
                opts.close && opts.close()
                event.stopPropagation()
                event.preventDefault()
            })
        }

        if(opts.autoClose && opts.autoTime > 0) {
            setTimeout(function(){$alertMain.remove()},opts.autoTime)
            opts.close && opts.close()
        }
    }
}
