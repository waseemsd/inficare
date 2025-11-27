(a=>{
    //[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(n){return new bootstrap.Tooltip(n)});
    //[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(n){return new bootstrap.Popover(n)});

    if(
        a.isFunction(a.validator) && void 0!==theme.PluginValidation && theme.PluginValidation.initialize(),
        a.isFunction(a.fn.themePluginAnimate) && a("[data-appear-animation]").length && theme.fn.dynIntObsInit("[data-appear-animation], [data-appear-animation-svg]","themePluginAnimate",theme.PluginAnimate.defaults),
        a.isFunction(a.fn.themePluginAnimatedContent) && (theme.fn.intObsInit("[data-plugin-animated-letters]:not(.manual), .animated-letters","themePluginAnimatedContent"), theme.fn.intObsInit("[data-plugin-animated-words]:not(.manual), .animated-words","themePluginAnimatedContent")),
       
        a.isFunction(a.fn.themePluginMatchHeight) && a("[data-plugin-match-height]").length && a(()=>{
            a("[data-plugin-match-height]:not(.manual)").each(function(){ var n=a(this); let t; var e=theme.fn.getOptions(n.data("plugin-options")); e&&(t=e); n.themePluginMatchHeight(t) });
        }),
        a.isFunction(a.fn.themePluginParallax) && a("[data-plugin-parallax]").length && theme.fn.intObsInit("[data-plugin-parallax]:not(.manual)","themePluginParallax"),
        a.isFunction(a.fn.themePluginProgressBar) && (a("[data-plugin-progress-bar]").length || a("[data-appear-progress-animation]").length) && theme.fn.dynIntObsInit("[data-plugin-progress-bar]:not(.manual), [data-appear-progress-animation]","themePluginProgressBar",theme.PluginProgressBar.defaults),
        a.isFunction(a.fn.themePluginRandomImages) && a("[data-plugin-random-images]").length && theme.fn.dynIntObsInit(".plugin-random-images","themePluginRandomImages",theme.PluginRandomImages.defaults),
        a.isFunction(a.fn.themePluginReadMore) && a("[data-plugin-readmore]").length && theme.fn.intObsInit("[data-plugin-readmore]:not(.manual)","themePluginReadMore"),
        a.isFunction(a.fn.themePluginRevolutionSlider) && (a("[data-plugin-revolution-slider]").length || a(".slider-container .slider").length) && a(()=>{
            a("[data-plugin-revolution-slider]:not(.manual), .slider-container .slider:not(.manual)").each(function(){ var n=a(this); let t; var e=theme.fn.getOptions(n.data("plugin-options")); e&&(t=e); n.themePluginRevolutionSlider(t) });
        }),
       
        a.isFunction(a.fn.themePluginToggle) && a("[data-plugin-toggle]").length && theme.fn.intObsInit("[data-plugin-toggle]:not(.manual)","themePluginToggle"),
        a.isFunction(a.fn.themePluginVideoBackground) && a("[data-plugin-video-background]").length && theme.fn.intObsInit("[data-plugin-video-background]:not(.manual)","themePluginVideoBackground"),
        
        void 0!==theme.Account && (a("#headerAccount").length || a("#headerSignUp").length || a("#headerSignIn").length || a("#headerRecover").length || a("#headerRecoverCancel").length) && theme.Account.initialize()
    );
}).apply(this,[jQuery]);
