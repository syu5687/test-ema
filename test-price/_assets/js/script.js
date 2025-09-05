/***************************************************************************
*
* SCRIPT JS
*
***************************************************************************/

jQuery(document).ready(function($){


    // Hover Button for All Pages
    $('.hoverJS').hover(function(){
        $(this).stop().fadeTo(100,0.8);
    },function(){
        $(this).stop().fadeTo(100,1);
    });


    if( $('.slider-li').length ){
        $('.section_one.four .slider-li').slick({
            dots: true,
            autoplay: false,
            autoplaySpeed: 2000,
        });
    }


    // ここから .chapel 用のSlick初期化コード
    $('.chapel').slick({
        // PC表示時の設定
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px', // PCでは60pxのパディング
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        
        // レスポンシブ設定（スマホ表示時の設定）
        responsive: [
            {
                breakpoint: 768, // 画面幅が768px以下の場合に適用
                settings: {
                    slidesToShow: 1,      // スマホでは中央に1枚を大きく表示
                    slidesToScroll: 1,
                    centerMode: true,     // スマホでも中央モードを有効にする
                    centerPadding: '20px' // スマホ向けにパディングを調整（例：20px）
                }
            },
            {
                breakpoint: 480, // 画面幅が480px以下の場合に適用
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '10px' // さらに小さい画面向けに調整
                }
            }
        ]
    });


    // CUSTOM CHECKBOX

    $('.formInputCheckbox label').click(function() {
        if( $(this).find('input').is(':checked')  ){
            if ($('input[type=checkbox]:checked').length > 2) {
                $(this).find('input').prop('checked', false);
                $(this).removeClass('checked');
            }
            else{
                $(this).find('input').prop('checked', true);
                $(this).addClass('checked');
                $(this).parents('.formInput').addClass('vali');
                $(this).parents('.formInput').removeClass('no-vali');
                $(this).parents('.formInput').find('span.wpcf7-not-valid-tip').hide();
            }
        }
        else{
            $(this).removeClass('checked');

        }

        $('.formInputCheckbox label input[type="checkbox"]').each(function(){
            if( !$('.formInputCheckbox label input[type="checkbox"]').is(':checked') ){
                $(this).parents('.formInput').removeClass('vali');
            }
        });
    });


    // DISABLED CHECKBOX VALIDATE
    document.addEventListener( 'wpcf7invalid', function( event ) {

        $('.wpcf7-not-valid-tip').each(function(index){
            $('.formInputCheckbox .wpcf7-not-valid-tip').prependTo( $('.formInputCheckbox .wpcf7-not-valid-tip').closest('.wpcf7-form-control-wrap') );
            $(this).parents('.checkvali').addClass('no-vali');
        });

          //ADD CLASS ICON VALIDATE CHECKBOX
        if( $('.formInputCheckbox input').is(':checked') ){
            $('.formInputCheckbox').addClass('vali');
        }
        else{
            $('.formInputCheckbox').addClass('no-vali');
        }

        // HIDE NOTE
        $('.formField .note').hide();


        $('html,body').animate({scrollTop:0},800);


    }, false );



   $('.wpcf7c-btn-confirm').click(function(){

        // GET VALUE INPUT
        var valInput =  $('.wpcf7-form').serializeArray();
        var $formHidden = $('#getFormHidden');
        $formHidden.html('');
        for( var i = 10; i < valInput.length; i++ ){
            inputItem = '<input type="hidden" name="'+ valInput[i].name +'" value="'+ valInput[i].value +'" />';
            $formHidden.append(inputItem);
        }

        //ADD CLASS STEP 1 2 3
        setTimeout(function(){
            if( $('form').hasClass('custom-wpcf7c-confirmed') ){
                $('.step_cf7 li').removeClass('active');
                $('.step_cf7 li').eq(1).addClass('active');
            }
        },1000);
   });



   // REMOVE VALIDATION CONTACT FORM 7
   $('.wpcf7c-btn-back').click(function(){
        // $('form').removeClass('invalid');
        // $('form').removeAttr('novalidate');
        // $('.wpcf7-not-valid-tip').remove();
        $('.step_cf7 li').eq(1).removeClass('active');
        $('.step_cf7 li').eq(0).addClass('active');
        $('form').removeClass('custom-wpcf7c-confirmed');
        // $('input[type="text"],input[type="email"],input[type="tel"]').removeAttr('readonly', true);
        // $('input[type="checkbox"]').removeAttr('disabled');
        // $('textarea').removeAttr('readonly','readonly');
        // $('.formField .note').show();
   });



   //SEND MAIL OK
   document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1510' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
   document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1530' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

    //SEND MAIL OK
   document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1548' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );


   //SEND MAIL OK
   document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1527' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
   document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1530' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
   document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1535' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );
   //SEND MAIL OK
        document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1566' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );
   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1567' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1622' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1627' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

    //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1633' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1644' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1648' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1662' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1703' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1714' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1752' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1712' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1895' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1913' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '1924' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '2047' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '2052' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '2100' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );
    
   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '2138' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '2128' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '2134' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );
    
   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '2152' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );
   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '2174' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK2555
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '2399' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '2555' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '2797' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );

   //SEND MAIL OK
            document.addEventListener( 'wpcf7mailsent', function( event ) {
        if ( '3409' == event.detail.contactFormId ) {
            $('#getFormHidden').submit();
        }
    }, false );
    //SEND MAIL OK
      document.addEventListener( 'wpcf7mailsent', function( event ) {
   if ( '3525' == event.detail.contactFormId ) {
        $('#getFormHidden').submit();
   }
}, false );



   // INPUT CHANGE ADD CLASS VALI
   $('.formField .formInput input[type="text"], .formField .formInput input[type="tel"]').change(function(){
        if( $(this).val() != '' ){
            $(this).parents('.formInput').addClass('vali');
            $(this).parents('.formInput').removeClass('no-vali');
            $(this).next('span.wpcf7-not-valid-tip').hide();
        }
        else{
            $(this).parents('.formInput').removeClass('vali');
        }

   });

   // INPUT KEYUP ADD CLASS VALI
   $('.formField .formInput input[type="text"], .formField .formInput input[type="tel"]').keyup(function(){
        if( $(this).val() != '' ){
            $(this).parents('.formInput').addClass('vali');
            $(this).parents('.formInput').removeClass('no-vali');
            $(this).next('span.wpcf7-not-valid-tip').hide();
        }
        else{
            $(this).parents('.formInput').removeClass('vali');
        }
   });


   var validations ={
        email: [/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/, 'Please enter a valid email address']
   };
   $('.formField .formInput input[type="email"]').change(function(){
        validation = new RegExp(validations['email'][0]);
        if (!validation.test(this.value)){
            this.setCustomValidity(validations['email'][1]);

            if( $(this).val() == '' ){
                $(this).parents('.formInput').removeClass('vali');
                $(this).parents('.formInput').removeClass('no-vali');
            }
            else{
                $(this).parents('.formInput').removeClass('vali');
                $(this).parents('.formInput').addClass('no-vali');
            }
            return false;
        } else {
            this.setCustomValidity('');
            $(this).parents('.formInput').removeClass('no-vali');
            $(this).parents('.formInput').addClass('vali');
            $(this).next('span.wpcf7-not-valid-tip').hide();
        }
   });

   $('.formField .formInput input[type="email"]').keyup(function(){
        validation = new RegExp(validations['email'][0]);
        if (!validation.test(this.value)){
            this.setCustomValidity(validations['email'][1]);
            if( $(this).val() == '' ){
                $(this).parents('.formInput').removeClass('vali');
                $(this).parents('.formInput').removeClass('no-vali');
            }
            else{
                $(this).parents('.formInput').removeClass('vali');
                $(this).parents('.formInput').addClass('no-vali');
            }
            return false;
        } else {
            this.setCustomValidity('');
            $(this).parents('.formInput').removeClass('no-vali');
            $(this).parents('.formInput').addClass('vali');
            $(this).next('span.wpcf7-not-valid-tip').hide();

        }
   });



   function validateNumber(event) {
        var key = window.event ? event.keyCode : event.which;
        if (event.keyCode === 8 || event.keyCode === 46) {
            return true;
        } else if ( key < 48 || key > 57 ) {
            return false;
        } else {
            return true;
        }
   };

   $('.formField .formInput input[type="tel"]').keypress(validateNumber);




});