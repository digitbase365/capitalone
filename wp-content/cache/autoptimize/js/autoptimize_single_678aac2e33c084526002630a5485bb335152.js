$=jQuery;function finlon_stretched_column()
{$('[data-elementor-type="wp-page"] > .elementor-section').each(function(){if($(this).hasClass('finlon-column-stretched-left')||$(this).hasClass('finlon-column-stretched-right')||$(this).hasClass('finlon-column-stretched-both'))
{$(this).addClass('finlon-column-stretched-yes').removeClass('finlon-column-stretched-no');}
else
{$(this).addClass('finlon-column-stretched-no').removeClass('finlon-column-stretched-yes');}});$('[data-elementor-type="wp-page"] > .elementor-section.finlon-column-stretched-yes').each(function(){var self_Section=$(this);var self_Column='';var column_wrapper='';var stretched_section='';if($(this).hasClass('finlon-column-stretched-yes')){if(self_Section.hasClass('finlon-column-stretched-left')||self_Section.hasClass('finlon-column-stretched-both'))
{self_Column=$('.elementor-column:not(.elementor-inner-column):first-child',self_Section);if($('.finlon-stretched-section',self_Column).length==0){column_wrapper=self_Column.children('.elementor-widget-wrap');column_wrapper.prepend('<div class="finlon-stretched-section"></div>');stretched_section=column_wrapper.children('.finlon-stretched-section');stretched_section.addClass('finlon-stretched-left-side');self_Column.addClass('finlon-column-stretched-yes finlon-column-stretched-left');if(self_Section.hasClass('finlon-left-stretched-content-yes'))
{self_Column.addClass('finlon-stretched-content-yes');}
else
{self_Column.removeClass('finlon-stretched-content-yes');}
column_wrapper.css('background-image','')
var col_bg_img=column_wrapper.css('background-image');if(col_bg_img!='none'||col_bg_img!='')
{stretched_section.css('background-image',col_bg_img)
column_wrapper.css('background-image','none');}
var col_bg_color=column_wrapper.css('background-color');if(col_bg_color!='none'||col_bg_color!='')
{stretched_section.css('background-color',col_bg_color)
column_wrapper.css('background-color','transparent');}
var col_bg_pos=column_wrapper.css('background-position');if(col_bg_pos!='none'||col_bg_pos!='')
{stretched_section.css('background-position',col_bg_pos)}
var col_bg_repeat=column_wrapper.css('background-repeat');if(col_bg_repeat!='none'||col_bg_repeat!='')
{stretched_section.css('background-repeat',col_bg_repeat)}
var col_bg_size=column_wrapper.css('background-size');if(col_bg_size!='none'||col_bg_size!='')
{stretched_section.css('background-size',col_bg_size)}
finlon_stretched_content_width_calculation();}}
if(self_Section.hasClass('finlon-column-stretched-right')||self_Section.hasClass('finlon-column-stretched-both'))
{self_Column=$('.elementor-column:not(.elementor-inner-column):last-child',self_Section);if($('.finlon-stretched-section',self_Column).length==0){column_wrapper=self_Column.children('.elementor-widget-wrap');column_wrapper.prepend('<div class="finlon-stretched-section"></div>');stretched_section=column_wrapper.children('.finlon-stretched-section');stretched_section.addClass('finlon-stretched-right-side');self_Column.addClass('finlon-column-stretched-yes finlon-column-stretched-right');if(self_Section.hasClass('finlon-right-stretched-content-yes'))
{self_Column.addClass('finlon-stretched-content-yes');}
else
{self_Column.removeClass('finlon-stretched-content-yes');}
column_wrapper.css('background-image','')
var col_bg_img=column_wrapper.css('background-image');if(col_bg_img!='none'||col_bg_img!='')
{stretched_section.css('background-image',col_bg_img)
column_wrapper.css('background-image','none');}
var col_bg_color=column_wrapper.css('background-color');if(col_bg_color!='none'||col_bg_color!='')
{stretched_section.css('background-color',col_bg_color)
column_wrapper.css('background-color','transparent');}
var col_bg_pos=column_wrapper.css('background-position');if(col_bg_pos!='none'||col_bg_pos!='')
{stretched_section.css('background-position',col_bg_pos)}
var col_bg_repeat=column_wrapper.css('background-repeat');if(col_bg_repeat!='none'||col_bg_repeat!='')
{stretched_section.css('background-repeat',col_bg_repeat)}
var col_bg_size=column_wrapper.css('background-size');if(col_bg_size!='none'||col_bg_size!='')
{stretched_section.css('background-size',col_bg_size)}
finlon_stretched_content_width_calculation();}}}});}
function finlon_stretched_content_width_calculation()
{if($('[data-elementor-type="wp-page"] > .elementor-section > .elementor-container > .elementor-column.finlon-column-stretched-yes').length>0)
{var window_width=$(window).width();var document_width=$(document).width();$('[data-elementor-type="wp-page"] > .elementor-section > .elementor-container > .elementor-column.finlon-column-stretched-yes').each(function(){var this_column=$(this);var section_width=this_column.closest('.elementor-container').width();var extra_width=((window_width-section_width)/2);var column_width='';var pos='left';if(this_column.hasClass('finlon-column-stretched-right'))
{pos='right'}
if(this_column.hasClass('finlon-column-stretched-left')){this_column.css('flex-direction','row-reverse')}
column_width=$('.elementor-widget-wrap',this_column).parent().width();if(column_width=='100%')
{$('.elementor-widget-wrap',this_column).css('width','100%')}
else
{$('.elementor-widget-wrap',this_column).css('width','')}
$('.finlon-stretched-section',this_column).css('margin-'+pos,'-'+extra_width+'px')
if(this_column.hasClass('finlon-stretched-content-yes'))
{stretched_section_width=$('.finlon-stretched-section',this_column).width();this_column.children('.elementor-widget-wrap').css('margin-'+pos,'-'+extra_width+'px');this_column.children('.elementor-widget-wrap').css('width',stretched_section_width+'px')}
else
{this_column.children('.elementor-widget-wrap').css('margin-'+pos,'');this_column.children('.elementor-widget-wrap').css('width','');}
if($(window).width()<1200){this_column.children('.elementor-widget-wrap').css('width','')
this_column.children('.elementor-widget-wrap').css('margin-'+pos,'');}});}}
function finlon_background_img()
{$('.elementor-section').each(function(){if($(this).css('background-image')!=''&&$(this).css('background-image')!='none')
{$(this).addClass('finlon-background-img-yes').removeClass('finlon-background-img-no')}
else
{$(this).addClass('finlon-background-img-no').removeClass('finlon-background-img-yes')}});$('.elementor-column').each(function(){if($(this).children('.elementor-widget-wrap').children('.finlon-stretched-section').length)
{if($(this).children('.elementor-widget-wrap').children('.finlon-stretched-section').css('background-image')!=''&&$(this).children('.elementor-widget-wrap').children('.finlon-stretched-section').css('background-image')!='none')
{$(this).addClass('finlon-background-img-yes').removeClass('finlon-background-img-no');}
else
{$(this).addClass('finlon-background-img-no').removeClass('finlon-background-img-yes');}}
else
{if($(this).children('.elementor-widget-wrap').css('background-image')!=''&&$(this).children('.elementor-widget-wrap').css('background-image')!='none')
{$(this).addClass('finlon-background-img-yes').removeClass('finlon-background-img-no');}
else
{$(this).addClass('finlon-background-img-no').removeClass('finlon-background-img-yes');}}});}
function finlon_background_color()
{$('.elementor-section').each(function(){if($(this).css('background-color')!=''&&$(this).css('background-color')!='transparent')
{$(this).addClass('finlon-background-color-yes').removeClass('finlon-background-color-no')}
else
{$(this).addClass('finlon-background-color-no').removeClass('finlon-background-color-yes')}});$('.elementor-column').each(function(){if($(this).children('.finlon-stretched-section').length)
{if($(this).children('.finlon-stretched-section').css('background-color')!=''&&$(this).children('.finlon-stretched-section').css('background-color')!='transparent')
{$(this).addClass('finlon-background-color-yes')}}
else
{if($(this).children('.elementor-widget-wrap').css('background-color')!=''&&$(this).children('.elementor-widget-wrap').css('background-color')!='transparent')
{$(this).addClass('finlon-background-color-yes').removeClass('finlon-background-color-no');}
else
{$(this).addClass('finlon-background-color-no').removeClass('finlon-background-color-yes');}}});}
$(document).on('ready',function(){finlon_stretched_column();finlon_stretched_content_width_calculation();finlon_background_img();finlon_background_color();if($('.finlon-column-stretched-yes.benefit-img').length){$('.finlon-column-stretched-yes.benefit-img .finlon-stretched-section').after('<div class="benefit-one__shape-2"></div>');}});$(window).resize(function(){finlon_stretched_column();finlon_stretched_content_width_calculation();finlon_background_img();finlon_background_color();});