(function (document) {
    var container = document.querySelector('#svg-container');

    if (container) {
    
        container.innerHTML = "<svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"><defs> <filter id=\"defs-drop-shadow\"> <feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"0\"/> <feOffset dx=\"0\" dy=\"2\" result=\"offsetblur\"/> <feComponentTransfer> <feFuncA type=\"linear\" slope=\"0.2\"/> </feComponentTransfer> <feMerge> <feMergeNode/> <feMergeNode in=\"SourceGraphic\"/> </feMerge> </filter> </defs><symbol preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 22 18.0005\" id=\"svg-check\"><title>check</title> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.0156,0.2666c-0.3535-0.355-0.9297-0.355-1.2822,0L7.353,11.7007\r\n\tc-0.353,0.3545-0.9307,0.3545-1.2827,0L3.2661,8.8853c-0.3521-0.3535-0.9302-0.3535-1.2822,0l-1.7192,1.7295\r\n\tc-0.353,0.3535-0.353,0.9346,0,1.2881l5.8057,5.832c0.3525,0.3545,0.9307,0.3545,1.2827,0L21.7344,3.2827\r\n\tc0.3535-0.3545,0.3535-0.9351,0-1.29L20.0156,0.2666z\"/> </symbol><symbol preserveAspectRatio=\"xMidYMid meet\" id=\"svg-defs\"><title>defs</title>  <style> .svg-shadow { filter: url('#defs-drop-shadow'); } </style> </symbol><symbol preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 126 100.001\" id=\"svg-go-button\"><title>go-button</title> <path d=\"M120.5313,41.1587L62.2559,2.2837C54.9648-2.5806,49,0.5854,49,9.3169V22.999H10c-5.5,0-10,4.5015-10,10.0015V67.001\r\n\tc0,5.5,4.5,9.998,10,9.998h39v13.6855c0,8.7305,5.9648,11.8965,13.2559,7.0332l58.2754-38.875\r\n\tC127.8223,53.9795,127.8223,46.022,120.5313,41.1587z\"/> </symbol><symbol preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 84.5581 84.9995\" id=\"svg-sound-button-play\"><title>sound-button-play</title> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M69.0269,61.6245c0-10.9004,6.3438-20.3433,15.5313-24.8345\r\n\tC81.7671,16.02,64.0015,0,42.478,0C19.0176,0,0,19.0278,0,42.4995c0,23.4736,19.0176,42.5,42.478,42.5\r\n\tc11.3027,0,21.5654-4.4258,29.1758-11.6289C69.9712,69.8042,69.0269,65.8237,69.0269,61.6245z\"/> </symbol><symbol preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 46.7261 46.75\" id=\"svg-sound-button-select\"><title>sound-button-select</title> <ellipse fill-rule=\"evenodd\" clip-rule=\"evenodd\" cx=\"23.3628\" cy=\"23.375\" rx=\"23.3633\" ry=\"23.375\"/> </symbol><symbol preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 42.5801 35.0005\" id=\"svg-speaker\"><title>speaker</title> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.4141,6.1548c-3.1396,3.1826-6.7197,4.7729-11.376,4.2012\r\n\tc-2.3848-0.2939-3.5649,0.7632-3.8213,3.1333C0.0723,14.8325,0.0015,16.1948,0,17.5552c0.0015,1.2373,0.082,2.6514,0.228,3.9951\r\n\tc0.2573,2.3701,1.4492,3.3564,3.833,3.0625c4.6587-0.5713,8.2124,1.0381,11.3521,4.2207c1.4546,1.4756,3.6323,0.4854,3.6323-0.8213\r\n\tV7.0166C19.0454,5.7095,16.8677,4.6802,15.4141,6.1548z M24.7783,8.4482c-0.8477,0-1.5088,0.8149-1.5088,1.8101v14.4834\r\n\tc0,0.9951,0.6611,1.8096,1.5088,1.8096c0.8467,0,1.5088-0.8145,1.5088-1.8096V10.2583C26.2871,9.2632,25.625,8.4482,24.7783,8.4482z\r\n\t M35.6396,9.6548c-0.8467,0-1.5078,0.8154-1.5078,1.811v12.0688c0,0.9951,0.6611,1.8096,1.5078,1.8096\r\n\tc0.8477,0,1.5088-0.8145,1.5088-1.8096V11.4658C37.1484,10.4702,36.4873,9.6548,35.6396,9.6548z M30.209,0\r\n\tc-0.8477,0-1.5078,0.8149-1.5078,1.8101v31.3799c0,0.9951,0.6602,1.8105,1.5078,1.8105c0.8467,0,1.5098-0.8154,1.5098-1.8105V1.8101\r\n\tC31.7188,0.8149,31.0557,0,30.209,0z M41.0713,4.8271c-0.8467,0-1.5088,0.8149-1.5088,1.8105v21.7241\r\n\tc0,0.9961,0.6621,1.8105,1.5088,1.8105s1.5088-0.8145,1.5088-1.8105V6.6377C42.5801,5.6421,41.918,4.8271,41.0713,4.8271z\"/> </symbol></svg>";

    

    } else {
        throw new Error('svginjector: Could not find element: #svg-container');
    }

})(document);
