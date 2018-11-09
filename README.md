# Install

    npm install ngx-time-line-component


# Basic usage

import NgxTimeLineModule in your module

    ...
    import  {  NgxTimeLineModule}  from  'ngx-time-line-component';
    @NgModule({
    imports:  [  
	    ...,
		NgxTimeLineModule
	],
	...
	});

component.html

    <timeline [settings]="settings"></timeline>

component.ts

    settings = {
	    inactiveColor: 'lightgray',
	    activeColor: 'darkblue',
	    showLabel: true,
	    labelColor: 'blue',
	    data: [
		    { title: 'Page 1' },
		    { title: 'Page 2' },
			{ title: 'Page 3' },
			{ title: 'Page 4' }
		]
	};
