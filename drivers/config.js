'use strict';
/* eslint-disable */
module.exports = {
	devices: {
		formentera_fan: {
			capabilities: ['onoff', 'dim'],
			pair: {
				viewOrder: ['generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_info',
					'generic_dipswitch',
					'generic_test_switch',
					'generic_done'
				],
				views: [{
						template: './lib/pair/choice.html',
						options: {
							title: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.title',
							body: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.body',
							buttons: [{
									name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_imitate',
									view: 'generic_imitate',
									svg: '<?xml version="1.0" encoding="utf-8"?>\r\n<!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n\t viewBox="0 0 150 150" style="enable-background:new 0 0 150 150;" xml:space="preserve" xmlns:pulse="-" xmlns:onclick="-">\r\n<style type="text/css"><![CDATA[\r\n\tsvg .st1{fill:none;stroke:#000000;stroke-width:0.72;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\r\n]]></style>\r\n<circle pulse:lastCommand="0010" onclick:send=\'{ "command": "0010" }\' fill="#ffffff" id="stop_1_" cx="77.5" cy="91.6" r="10.8"/>\r\n<polygon pulse:lastCommand="0001" onclick:send=\'{ "command": "0001" }\' fill="#ffffff" id="hi" points="92.7,80 98.9,73.7 101,76.5 102.7,79.6 104,82.8 104.9,86.3 105.3,89.8 105.3,93.3 104.9,96.8\r\n\t104,100.2 102.7,103.4 101,106.5 98.9,109.3 92.7,103.1 "/>\r\n<polygon pulse:lastCommand="0100" onclick:send=\'{ "command": "0100" }\' fill="#ffffff" id="med" points="65.9,76.3 59.6,70.1 62.5,68.1 65.6,66.4 68.8,65.1 72.3,64.2 75.8,63.8 79.3,63.8 82.7,64.2\r\n\t86.1,65.1 89.3,66.4 92.4,68.1 95.3,70.1 89.1,76.3 "/>\r\n<polygon pulse:lastCommand="1000" onclick:send=\'{ "command": "1000" }\' fill="#ffffff" id="low" points="62.3,80 56.1,73.7 54,76.5 52.3,79.6 51,82.8 50.1,86.3 49.7,89.8 49.7,93.3 50.1,96.8\r\n\t51,100.2 52.3,103.4 54,106.5 56.1,109.3 62.3,103.1 "/>\r\n<polygon pulse:lastCommand="0110" onclick:send=\'{ "command": "0110" }\' fill="#ffffff" id="light" points="65.9,106.8 59.6,113 62.5,115.1 65.6,116.7 68.8,118 72.3,118.9 75.8,119.3 79.3,119.3\r\n\t82.7,118.9 86.1,118 89.3,116.7 92.4,115.1 95.3,113 89.1,106.8 "/>\r\n<polygon pulse:lastCommand="1010" onclick:send=\'{ "command": "1010" }\' fill="#ffffff" id="stop1h" points="71.3,29.4 67.9,26.1 69.4,25 71.1,24.2 72.8,23.5 74.6,23 76.5,22.8 78.3,22.8 80.1,23\r\n\t81.9,23.5 83.6,24.2 85.2,25 86.7,26.1 83.5,29.4 "/>\r\n<polygon pulse:lastCommand="1001" onclick:send=\'{ "command": "1001" }\' fill="#ffffff" id="stop2h" points="69.3,31.3 66.1,28 65,29.5 64.1,31.1 63.4,32.8 62.9,34.7 62.7,36.5 62.7,38.4 62.9,40.2\r\n\t63.4,42 64.1,43.7 65,45.3 66.1,46.8 69.3,43.5 "/>\r\n<polygon pulse:lastCommand="1100" onclick:send=\'{ "command": "1100" }\' fill="#ffffff" id="stop4h" points="85.4,31.3 88.7,28 89.8,29.5 90.6,31.1 91.3,32.8 91.8,34.7 92,36.5 92,38.4 91.8,40.2\r\n\t91.3,42 90.6,43.7 89.8,45.3 88.7,46.8 85.4,43.5 "/>\r\n<polygon pulse:lastCommand="0011" onclick:send=\'{ "command": "0011" }\' fill="#ffffff" id="stop8h" points="71.3,45.5 67.9,48.7 69.4,49.8 71.1,50.7 72.8,51.4 74.6,51.9 76.5,52.1 78.3,52.1\r\n\t80.1,51.9 81.9,51.4 83.6,50.7 85.2,49.8 86.7,48.7 83.5,45.5 "/>\r\n<path class="st1" d="M41,5v139.5 M110.6,147.9H44.4 M114,5v139.5 M44.4,1.6h66.3 M-226,132.2v1.3 M-143.6,133.5v-1.3 M-225.9,128.8\r\n\tv0.6 M-225.9,129.9h-0.1"/>\r\n<polygon class="st1" points="78.2,12 78,11.5 77.4,11.3 76.9,11.5 76.7,12 76.9,12.6 77.4,12.8 78,12.6 "/>\r\n<path class="st1" d="M65,29.3h0.1 M65,45.4h0.1 M89.8,45.4H90 M89.8,29.3H90"/>\r\n<polyline class="st1" points="66.1,27.9 64.5,29.9 63.5,32.3 62.8,34.8 62.6,37.4 62.8,39.9 63.5,42.5 64.5,44.8 66.1,46.9 "/>\r\n<path class="st1" d="M85.6,31.2l3.2-3.4 M83.6,45.4l3.4,3.4 M85.6,43.5l3.2,3.4 M71.2,45.4L68,48.8 M69.4,43.5l-3.4,3.4 M69.4,31.2\r\n\tl-3.4-3.4 M71.2,29.3L68,25.9 M69.4,31.2v12.3 M85.6,43.5V31.2 M65,29.3h0.1 M83.6,45.4H71.2 M65,45.4h0.1 M89.8,45.4H90 M89.8,29.3\r\n\tH90"/>\r\n<polyline class="st1" points="71.2,29.3 83.6,29.3 87,25.9 84.8,24.5 82.5,23.3 80,22.7 77.4,22.6 74.9,22.7 72.4,23.3 70.1,24.5 \r\n\t68,25.9 "/>\r\n<polyline class="st1" points="88.8,46.9 90.4,44.8 91.4,42.5 92,39.9 92.3,37.3 92,34.8 91.4,32.3 90.4,29.9 88.8,27.9 "/>\r\n<polyline class="st1" points="68,48.8 70.1,50.2 72.4,51.4 74.9,52 77.4,52.2 80,52 82.5,51.4 84.8,50.2 87,48.8 "/>\r\n<path class="st1" d="M54.2,76.4h-0.1 M54.2,106.8h-0.1 M100.8,106.8h-0.1 M100.8,76.4h-0.1"/>\r\n<polyline class="st1" points="56.1,73.7 54.1,76.6 52.3,79.7 51,83 50.2,86.4 49.7,89.9 49.7,93.4 50.2,96.9 51,100.2 52.3,103.6 \r\n\t54.1,106.5 56.1,109.4 "/>\r\n<path class="st1" d="M92.6,80.1l6.3-6.3 M89.1,106.8l6.2,6.2 M92.6,103.2l6.3,6.2 M65.9,106.8l-6.3,6.2 M62.3,103.2l-6.2,6.2\r\n\t M62.3,80.1l-6.2-6.3 M65.8,76.4l-6.2-6.2 M62.3,80.1v23.1 M92.6,103.2V80.1 M54.2,76.4h-0.1 M89.1,106.8H65.9 M54.2,106.8h-0.1\r\n\t M100.8,106.8h-0.1 M100.8,76.4h-0.1"/>\r\n<polyline class="st1" points="65.8,76.4 89.1,76.4 95.3,70.2 92.4,68.2 89.3,66.5 86.1,65.2 82.7,64.3 79.3,63.8 75.6,63.8 \r\n\t72.1,64.3 68.8,65.2 65.6,66.5 62.5,68.2 59.6,70.2 "/>\r\n<polyline class="st1" points="98.9,109.4 101,106.5 102.6,103.6 103.9,100.2 104.8,96.9 105.2,93.4 105.2,89.9 104.8,86.4 \r\n\t103.9,82.9 102.6,79.7 101,76.6 98.9,73.7 "/>\r\n<polyline class="st1" points="59.6,113 62.5,115.1 65.6,116.7 68.8,118 72.3,118.9 75.8,119.3 79.3,119.3 82.7,118.9 86.1,118 \r\n\t89.3,116.7 92.4,115.1 95.3,113 "/>\r\n<polygon class="st1" points="88.4,91.6 88,89.2 87.3,86.9 86,84.8 84.3,83 82.2,81.7 79.9,81 77.4,80.7 75,81 72.7,81.7 70.6,83 \r\n\t68.9,84.8 67.6,86.9 66.8,89.2 66.6,91.6 66.8,94 67.6,96.3 68.9,98.4 70.6,100.1 72.7,101.4 75,102.3 77.4,102.5 79.9,102.3 \r\n\t82.2,101.4 84.3,100.1 86,98.4 87.3,96.3 88,94 "/>\r\n<polyline class="st1" points="41,144.5 41.3,145.8 41.9,147 43.1,147.6 44.4,147.9 "/>\r\n<polyline class="st1" points="110.6,147.9 111.9,147.6 113,147 113.7,145.8 114,144.5 "/>\r\n<polyline class="st1" points="114,5 113.7,3.7 113,2.7 111.9,1.9 110.6,1.6 "/>\r\n<polyline class="st1" points="44.4,1.6 43.1,1.9 41.9,2.7 41.3,3.7 41,5 "/>\r\n<polyline class="st1" points="67.1,128.8 68.7,128.8 68.7,131.2 "/>\r\n<polyline class="st1" points="69,131.7 70.7,131.7 70.7,132.2 68,132.2 "/>\r\n<line class="st1" x1="67.1" y1="128.8" x2="67.1" y2="131.3"/>\r\n<polyline class="st1" points="68.7,131.2 68.7,131.6 69,131.7 "/>\r\n<polyline class="st1" points="67.1,131.3 67.4,132 68,132.2 "/>\r\n<polygon class="st1" points="76,129.3 76,128.9 75.9,128.8 73.1,128.8 72.4,129 72.1,129.7 72.1,131.7 72.8,132.2 75.9,132.2 \r\n\t76,132.1 76,131.9 75.8,131.7 75,131.7 73.7,131.6 73.7,131 74.3,130.8 75.4,130.8 75.6,130.7 75.6,130.3 75.4,130.3 74.6,130.2 \r\n\t73.7,130.2 73.7,129.5 74,129.4 74.7,129.4 "/>\r\n<polygon class="st1" points="78,128.8 78,132.2 78.1,132.4 80,132.2 81.8,132.1 82.4,131.5 82.4,129.5 82.1,129.1 81.7,128.9 \r\n\t79.9,128.8 "/>\r\n<polygon class="st1" points="79.5,129.3 79.5,131.7 79.8,131.7 80.7,131.6 80.8,129.9 80.7,129.5 80.4,129.4 "/>\r\n<polygon class="st1" points="87.9,128.8 85.1,128.8 84.3,128.9 84,129.1 83.9,129.5 84.2,130.2 84.7,130.6 86.1,131 86.5,131.1 \r\n\t86.7,131.3 86.6,131.7 84,131.7 83.9,132.4 86.9,132.2 87.5,132.2 88.2,131.7 88.3,131.5 88.2,131.1 88,130.8 87.8,130.6 \r\n\t86.4,130.2 85.7,129.9 85.5,129.7 85.6,129.3 88,129.3 88,128.8 "/>\r\n<polygon class="st1" points="97.5,128.8 95.1,128.8 94,128.9 93.6,129.3 93.6,129.8 93.5,131 93.5,131.6 93.8,132 94.9,132.2 \r\n\t96,132.2 97.3,132.4 97.5,131.9 97.3,131.7 95.8,131.7 95.3,131.6 95,131.5 95.1,131.2 95.1,129.4 95.7,129.3 97.3,129.3 \r\n\t97.5,129.1 "/>\r\n<polygon class="st1" points="100.7,128.8 99.1,128.8 99.3,129.1 99.3,129.8 99.4,131 99.8,131.3 100.4,131.5 102,131.5 102,132.1 \r\n\t102.2,132.4 103.5,132.2 103.7,132.2 103.7,131.5 103.9,131.3 104.1,130.8 103.7,131 103.5,130.7 103.5,128.8 102,128.8 102,130.7 \r\n\t101.9,130.8 101,130.8 100.7,130.6 "/>\r\n<polygon class="st1" points="53.3,135.5 50.4,135.5 50.4,139.6 50.6,140.3 51,140.8 51.5,141.2 56,141.2 56.3,140.9 56.1,138.2 \r\n\t54.7,138.3 53.4,138.2 53.2,136.8 "/>\r\n<polygon class="st1" points="57.3,138.4 57.3,141.2 62.2,141.2 62.7,140.8 63,140.1 63,135.6 62.8,135.5 60.1,135.5 60.1,136.9 \r\n\t60,138.3 58.7,138.4 "/>\r\n<polygon class="st1" points="60.3,134.3 63,134.3 63.1,131.6 63.1,130.2 63,129.5 62.6,129 61.9,128.6 57.5,128.6 57.3,128.9 \r\n\t57.4,131.5 58.8,131.5 60.1,131.6 60.4,133 "/>\r\n<polygon class="st1" points="56.3,131.3 56.1,128.6 51.3,128.6 50.8,129 50.4,129.7 50.4,131.7 50.6,133.2 50.6,134.2 50.7,134.3 \r\n\t53.4,134.3 53.4,132.9 53.5,131.5 54.8,131.3 "/>\r\n<rect x="90.1" y="129.8" class="st1" width="1.7" height="1.7"/>\r\n</svg>\r\n'
								},
								{
									name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_dipswitch',
									view: 'generic_info',
									svg: '<?xml version="1.0" encoding="utf-8"?>\r\n<!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<svg version="1.1"\r\n\t id="Layer_1" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:v="http://schemas.microsoft.com/visio/2003/SVGExtensions/"\r\n\t xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 167.5 162.6"\r\n\t style="enable-background:new 0 0 167.5 162.6;" xml:space="preserve">\r\n<style type="text/css">\r\n\t.st0{fill:#595959;stroke:#000000;stroke-width:0.123;stroke-miterlimit:3;}\r\n\t.st1{fill:#595959;}\r\n\t.st2{fill:#FFFFFF;enable-background:new    ;}\r\n\t.st3{font-family:\'ArialMT\';}\r\n\t.st4{font-size:2.4596px;}\r\n\t.st5{fill:#7F7F7F;stroke:#000000;stroke-width:0.123;stroke-miterlimit:3;}\r\n\t.st6{fill:#EAEFF5;stroke:#000000;stroke-width:0.123;stroke-miterlimit:3;}\r\n</style>\r\n<v:documentProperties  v:langID="1033" v:viewMarkup="false">\r\n\t<v:userDefs>\r\n\t\t<v:ud  v:nameU="msvConvertTheme"></v:ud>\r\n\t</v:userDefs>\r\n</v:documentProperties>\r\n<title>Page-1</title>\r\n<v:pageProperties  v:drawingScale="1" v:drawingUnits="0" v:pageScale="1" v:shadowOffsetX="0" v:shadowOffsetY="0" v:shadowType="1">\r\n\t</v:pageProperties>\r\n<g id="shape1000-5" transform="translate(217.344,0.5) rotate(90)">\r\n\t<title>Sheet.1000</title>\r\n\t<v:userDefs>\r\n\t\t<v:ud  v:nameU="msvThemeEffects" v:val="VT0(254):26"></v:ud>\r\n\t</v:userDefs>\r\n\t\r\n\t\t<rect x="39.8" y="122.1" transform="matrix(2.535182e-06 1 -1 2.535182e-06 188.9581 78.2546)" class="st0" width="31.1" height="23"/>\r\n</g>\r\n<g id="shape1001-7" transform="translate(234.444,44.055) rotate(90)">\r\n\t<title>Sheet.1001</title>\r\n\t<desc>2</desc>\r\n\t<v:userDefs>\r\n\t\t<v:ud  v:nameU="msvThemeEffects" v:val="VT0(254):26"></v:ud>\r\n\t</v:userDefs>\r\n\t<v:textBlock  v:margins="rect(4,4,4,4)"></v:textBlock>\r\n\t<v:textRect  cx="6.975" cy="156.469" height="12.25" width="13.95"></v:textRect>\r\n\t\r\n\t\t<rect x="15.9" y="152.3" transform="matrix(2.535182e-06 1 -1 2.535182e-06 171.4279 136.2372)" class="st1" width="3.4" height="3"/>\r\n\t<text transform="matrix(0 -1 1 0 18.3333 154.5182)" class="st2 st3 st4">2<v:paragraph  v:horizAlign="1"></v:paragraph><v:tabList></v:tabList></text>\r\n</g>\r\n<g id="shape1002-10" transform="translate(234.444,67.305) rotate(90)">\r\n\t<title>Sheet.1002</title>\r\n\t<desc>3</desc>\r\n\t<v:userDefs>\r\n\t\t<v:ud  v:nameU="msvThemeEffects" v:val="VT0(254):26"></v:ud>\r\n\t</v:userDefs>\r\n\t<v:textBlock  v:margins="rect(4,4,4,4)"></v:textBlock>\r\n\t<v:textRect  cx="6.975" cy="156.469" height="12.25" width="13.95"></v:textRect>\r\n\t\r\n\t\t<rect x="-7.4" y="146.6" transform="matrix(2.535182e-06 1 -1 2.535182e-06 142.4593 153.7685)" class="st1" width="3.4" height="3"/>\r\n\t<text transform="matrix(0 -1 1 0 -4.9167 148.7995)" class="st2 st3 st4">3<v:paragraph  v:horizAlign="1"></v:paragraph><v:tabList></v:tabList></text>\r\n</g>\r\n<g id="shape1003-13" transform="translate(234.444,90.555) rotate(90)">\r\n\t<title>Sheet.1003</title>\r\n\t<desc>4</desc>\r\n\t<v:userDefs>\r\n\t\t<v:ud  v:nameU="msvThemeEffects" v:val="VT0(254):26"></v:ud>\r\n\t</v:userDefs>\r\n\t<v:textBlock  v:margins="rect(4,4,4,4)"></v:textBlock>\r\n\t<v:textRect  cx="6.975" cy="156.469" height="12.25" width="13.95"></v:textRect>\r\n\t\r\n\t\t<rect x="-30.6" y="140.9" transform="matrix(2.535182e-06 1 -1 2.535182e-06 113.4907 171.2999)" class="st1" width="3.4" height="3"/>\r\n\t<text transform="matrix(0 -1 1 0 -28.1667 143.0807)" class="st2 st3 st4">4<v:paragraph  v:horizAlign="1"></v:paragraph><v:tabList></v:tabList></text>\r\n</g>\r\n<g id="shape1004-16" transform="translate(234.444,20.805) rotate(90)">\r\n\t<title>Sheet.1004</title>\r\n\t<desc>1</desc>\r\n\t<v:userDefs>\r\n\t\t<v:ud  v:nameU="msvThemeEffects" v:val="VT0(254):26"></v:ud>\r\n\t</v:userDefs>\r\n\t<v:textBlock  v:margins="rect(4,4,4,4)"></v:textBlock>\r\n\t<v:textRect  cx="6.975" cy="156.469" height="12.25" width="13.95"></v:textRect>\r\n\t\r\n\t\t<rect x="39.1" y="158" transform="matrix(2.535182e-06 1 -1 2.535182e-06 200.3965 118.7058)" class="st1" width="3.4" height="3"/>\r\n\t<text transform="matrix(0 -1 1 0 41.5833 160.2365)" class="st2 st3 st4">1<v:paragraph  v:horizAlign="1"></v:paragraph><v:tabList></v:tabList></text>\r\n</g>\r\n<g id="shape1008-28" transform="translate(247.944,20.805) rotate(90)">\r\n\t<title>Sheet.1008</title>\r\n\t<v:userDefs>\r\n\t\t<v:ud  v:nameU="msvThemeEffects" v:val="VT0(254):26"></v:ud>\r\n\t\t<v:ud  v:nameU="msvThemeColors" v:val="VT0(254):26"></v:ud>\r\n\t</v:userDefs>\r\n\t\r\n\t\t<rect x="32.3" y="168.1" transform="matrix(2.535182e-06 1 -1 2.535182e-06 207.1018 139.0005)" class="st5" width="3.4" height="10"/>\r\n</g>\r\n<g id="shape1009-30" transform="translate(247.669,20.805) rotate(90)">\r\n\t<title>Sheet.1009</title>\r\n\t<v:userDefs>\r\n\t\t<v:ud  v:nameU="msvThemeEffects" v:val="VT0(254):26"></v:ud>\r\n\t\t<v:ud  v:nameU="msvThemeColors" v:val="VT0(254):26"></v:ud>\r\n\t</v:userDefs>\r\n\t\r\n\t\t<rect x="35.7" y="171.1" transform="matrix(2.535182e-06 1 -1 2.535182e-06 210.2149 135.3374)" class="st6" width="3.4" height="3.3"/>\r\n</g>\r\n<g id="shape1010-32" transform="translate(-36.7442,81.255) rotate(-90)">\r\n\t<title>Sheet.1010</title>\r\n\t<v:userDefs>\r\n\t\t<v:ud  v:nameU="msvThemeEffects" v:val="VT0(254):26"></v:ud>\r\n\t\t<v:ud  v:nameU="msvThemeColors" v:val="VT0(254):26"></v:ud>\r\n\t</v:userDefs>\r\n\t\r\n\t\t<rect x="24.7" y="118.1" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -96.6745 149.4739)" class="st5" width="3.4" height="10"/>\r\n</g>\r\n<g id="shape1011-34" transform="translate(-63.7442,81.255) rotate(-90)">\r\n\t<title>Sheet.1011</title>\r\n\t<v:userDefs>\r\n\t\t<v:ud  v:nameU="msvThemeEffects" v:val="VT0(254):26"></v:ud>\r\n\t\t<v:ud  v:nameU="msvThemeColors" v:val="VT0(254):26"></v:ud>\r\n\t</v:userDefs>\r\n\t\r\n\t\t<rect x="21.4" y="148.4" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -126.9951 173.1535)" class="st6" width="3.4" height="3.3"/>\r\n</g>\r\n<g id="shape1012-36" transform="translate(-36.7442,58.005) rotate(-90)">\r\n\t<title>Sheet.1012</title>\r\n\t<v:userDefs>\r\n\t\t<v:ud  v:nameU="msvThemeEffects" v:val="VT0(254):26"></v:ud>\r\n\t\t<v:ud  v:nameU="msvThemeColors" v:val="VT0(254):26"></v:ud>\r\n\t</v:userDefs>\r\n\t\r\n\t\t<rect x="1.4" y="112.4" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -114.2059 120.5052)" class="st5" width="3.4" height="10"/>\r\n</g>\r\n<g id="shape1013-38" transform="translate(-63.7442,58.005) rotate(-90)">\r\n\t<title>Sheet.1013</title>\r\n\t<v:userDefs>\r\n\t\t<v:ud  v:nameU="msvThemeEffects" v:val="VT0(254):26"></v:ud>\r\n\t\t<v:ud  v:nameU="msvThemeColors" v:val="VT0(254):26"></v:ud>\r\n\t</v:userDefs>\r\n\t\r\n\t\t<rect x="-1.9" y="142.7" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -144.5264 144.1848)" class="st6" width="3.4" height="3.3"/>\r\n</g>\r\n<g id="shape1014-40" transform="translate(-36.7442,104.505) rotate(-90)">\r\n\t<title>Sheet.1014</title>\r\n\t<v:userDefs>\r\n\t\t<v:ud  v:nameU="msvThemeEffects" v:val="VT0(254):26"></v:ud>\r\n\t\t<v:ud  v:nameU="msvThemeColors" v:val="VT0(254):26"></v:ud>\r\n\t</v:userDefs>\r\n\t\r\n\t\t<rect x="47.9" y="123.8" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -79.1431 178.4426)" class="st5" width="3.4" height="10"/>\r\n</g>\r\n<g id="shape1015-42" transform="translate(-63.7442,104.505) rotate(-90)">\r\n\t<title>Sheet.1015</title>\r\n\t<v:userDefs>\r\n\t\t<v:ud  v:nameU="msvThemeEffects" v:val="VT0(254):26"></v:ud>\r\n\t\t<v:ud  v:nameU="msvThemeColors" v:val="VT0(254):26"></v:ud>\r\n\t</v:userDefs>\r\n\t\r\n\t\t<rect x="44.6" y="154.1" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -109.4637 202.1221)" class="st6" width="3.4" height="3.3"/>\r\n</g>\r\n</svg>\r\n'
								}
							],
							prepend: [],
							append: [],
							svgWidth: '80vw',
							svgHeight: '65vh'
						},
						prepend: ['./../assets/433_generator/css/styles.css',
							'./../assets/433_generator/css/svg.css',
							'./../assets/433_generator/js/svghighlighter.js'
						],
						append: [],
						id: 'generic_choice'
					},
					{
						template: './lib/pair/imitate.html',
						options: {
							svg: '../433_generator/assets/formentera_remote/icon.svg',
							prepend: [],
							append: [],
							title: 'views.generic_imitate.title',
							body: 'views.generic_imitate.body',
							svgWidth: '80vw',
							svgHeight: '70vh',
							initWithDeviceData: false,
							previous: true,
							next: false
						},
						prepend: ['./../assets/433_generator/css/styles.css',
							'./../assets/433_generator/css/svg.css',
							'./../assets/433_generator/js/svghighlighter.js'
						],
						append: [],
						id: 'generic_imitate'
					},
					{
						template: './lib/pair/test_switch.html',
						options: {
							next: 'generic_done',
							initWithDeviceData: true,
							sendToggleOnInit: false,
							prepend: [],
							append: [],
							title: 'deviceClasses.ceiling_fan.views.generic_test_switch.title',
							svg: '../433_generator/assets/formentera_fan/test.svg',
							body: 'deviceClasses.ceiling_fan.views.generic_test_switch_2.body',
							svgWidth: '80vw',
							svgHeight: '70vh',
							previous: true
						},
						prepend: ['./../assets/433_generator/css/styles.css',
							'./../assets/433_generator/css/svg.css',
							'./../assets/433_generator/js/svghighlighter.js',
							'./../assets/433_generator/css/styles.css',
							'./../assets/433_generator/css/svg.css',
							'./../assets/433_generator/js/svghighlighter.js'
						],
						append: [],
						id: 'generic_test_switch_2'
					},
					{
						template: './lib/pair/info.html',
						options: {
							title: 'deviceClasses.generic_dipswitch_socket.views.generic_info.title',
							body: 'deviceClasses.generic_dipswitch_socket.views.generic_info.body',
							previous: 'generic_choice',
							prepend: [],
							append: [],
							svg: '../433_generator/assets/formentera_remote/dipswitch.svg',
							svgWidth: '80vw',
							svgHeight: '70vh',
							next: true
						},
						prepend: ['./../assets/433_generator/css/styles.css',
							'./../assets/433_generator/css/svg.css',
							'./../assets/433_generator/js/svghighlighter.js'
						],
						append: [],
						id: 'generic_info'
					},
					{
						template: './lib/pair/dipswitch.html',
						options: {
							dipswitchList: [1, 2, 3, 4],
							prepend: [],
							append: [],
							title: 'views.generic_dipswitch.title',
							body: 'views.generic_dipswitch.body',
							svgWidth: '80vw',
							svgHeight: '24vh',
							previous: true,
							next: true
						},
						prepend: ['./../assets/433_generator/css/styles.css',
							'./../assets/433_generator/css/dipswitch.css'
						],
						append: [],
						id: 'generic_dipswitch'
					},
					{
						template: './lib/pair/test_switch.html',
						options: {
							title: 'deviceClasses.ceiling_fan.views.generic_test_switch.title',
							svg: '../433_generator/assets/formentera_fan/test.svg',
							body: 'deviceClasses.ceiling_fan.views.generic_test_switch.body',
							prepend: [],
							append: [],
							svgWidth: '80vw',
							svgHeight: '70vh',
							initWithDeviceData: true,
							previous: true,
							next: true,
							sendToggleOnInit: false
						},
						prepend: ['./../assets/433_generator/css/styles.css',
							'./../assets/433_generator/css/svg.css',
							'./../assets/433_generator/js/svghighlighter.js',
							'./../assets/433_generator/css/styles.css',
							'./../assets/433_generator/css/svg.css',
							'./../assets/433_generator/js/svghighlighter.js'
						],
						append: [],
						id: 'generic_test_switch'
					},
					{
						template: './lib/pair/done.html',
						options: {
							title: 'views.generic_done.title',
							prepend: '',
							append: ''
						},
						prepend: [],
						append: [],
						id: 'generic_done'
					}
				]
			},
			images: {},
			id: 'formentera_fan',
			class: 'fan',
			signal: 'pt2260',
			capabilitiesOptions: {
				dim: {
					decimals: 1,
					min: 0,
					max: 1,
					title: 'deviceClasses.ceiling_fan.capabilitiesOptions.dim.title'
				}
			},
			driver: '../433_generator/drivers/formentera/driver.js',
			triggers: [{
				id: 'formentera_fan:received',
				title: '433_generator.generic.button_pressed',
				args: [{
						name: 'command',
						type: 'dropdown',
						values: [{
								id: '0010',
								label: 'command.stop'
							},
							{
								id: '0001',
								label: 'command.hi'
							},
							{
								id: '0100',
								label: 'command.med'
							},
							{
								id: '1000',
								label: 'command.low'
							},
							{
								id: '0110',
								label: 'command.light'
							},
							{
								id: '1010',
								label: 'command.stop1h'
							},
							{
								id: '1001',
								label: 'command.stop2h'
							},
							{
								id: '1100',
								label: 'command.stop4h'
							},
							{
								id: '0011',
								label: 'command.stop8h'
							}
						]
					},
					{
						name: 'device',
						type: 'device',
						filter: 'driver_id=formentera_fan'
					}
				]
			}],
			actions: [{
				id: 'formentera_fan:send',
				title: {
					en: 'Send command',
					nl: 'Stuur commando'
				},
				args: [{
						name: 'command',
						type: 'dropdown',
						values: [{
								id: '0010',
								label: 'command.stop'
							},
							{
								id: '0001',
								label: 'command.hi'
							},
							{
								id: '0100',
								label: 'command.med'
							},
							{
								id: '1000',
								label: 'command.low'
							},
							{
								id: '0110',
								label: 'command.light'
							},
							{
								id: '1010',
								label: 'command.stop1h'
							},
							{
								id: '1001',
								label: 'command.stop2h'
							},
							{
								id: '1100',
								label: 'command.stop4h'
							},
							{
								id: '0011',
								label: 'command.stop8h'
							}
						]
					},
					{
						name: 'device',
						type: 'device',
						filter: 'driver_id=formentera_fan'
					}
				]
			}],
			logLevel: 2,
			name: 'devices.formentera_fan.name',
			icon: '../433_generator/assets/formentera_fan/icon.svg'
		},
		formentera_remote: {
			class: 'other',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
						template: './lib/pair/imitate.html',
						options: {
							title: 'deviceClasses.generic_remote.views.generic_imitate.title',
							body: 'deviceClasses.generic_remote.views.generic_imitate.body',
							prepend: [],
							append: [],
							svg: '../433_generator/assets/formentera_remote/pair.svg',
							svgWidth: '80vw',
							svgHeight: '70vh',
							initWithDeviceData: false,
							previous: true,
							next: false
						},
						prepend: ['./../assets/433_generator/css/styles.css',
							'./../assets/433_generator/css/svg.css',
							'./../assets/433_generator/js/svghighlighter.js'
						],
						append: [],
						id: 'generic_imitate'
					},
					{
						template: './lib/pair/test_remote.html',
						options: {
							svg: '../433_generator/assets/formentera_remote/icon.svg',
							prepend: [],
							append: [],
							title: 'views.generic_test_remote.title',
							body: 'views.generic_test_remote.body',
							svgWidth: '80vw',
							svgHeight: '70vh',
							initWithDeviceData: false,
							previous: true,
							next: true
						},
						prepend: ['./../assets/433_generator/css/styles.css',
							'./../assets/433_generator/css/svg.css',
							'./../assets/433_generator/js/svghighlighter.js'
						],
						append: [],
						id: 'generic_test_remote'
					},
					{
						template: './lib/pair/done.html',
						options: {
							title: 'views.generic_done.title',
							prepend: '',
							append: ''
						},
						prepend: [],
						append: [],
						id: 'generic_done'
					}
				]
			},
			images: {},
			id: 'formentera_remote',
			signal: 'pt2260',
			driver: '../433_generator/drivers/formentera/driver.js',
			triggers: [{
				id: 'formentera_remote:received',
				title: '433_generator.generic.button_pressed',
				args: [{
						name: 'command',
						type: 'dropdown',
						values: [{
								id: '0010',
								label: 'command.stop'
							},
							{
								id: '0001',
								label: 'command.hi'
							},
							{
								id: '0100',
								label: 'command.med'
							},
							{
								id: '1000',
								label: 'command.low'
							},
							{
								id: '0110',
								label: 'command.light'
							},
							{
								id: '1010',
								label: 'command.stop1h'
							},
							{
								id: '1001',
								label: 'command.stop2h'
							},
							{
								id: '1100',
								label: 'command.stop4h'
							},
							{
								id: '0011',
								label: 'command.stop8h'
							}
						]
					},
					{
						name: 'device',
						type: 'device',
						filter: 'driver_id=formentera_remote'
					}
				]
			}],
			logLevel: 2,
			name: 'devices.formentera_remote.name',
			icon: '../433_generator/assets/formentera_remote/icon.svg'
		}
	}
};
