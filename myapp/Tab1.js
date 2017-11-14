define([
	'dijit/form/Button',
	'put-selector/put',
	'./Tab'
], function (Button, put, Tab) {
	return Tab.createSubclass({
		title: 'Tab 1',

		buildRendering: function () {
			this.inherited(arguments);

			var domNode = this.domNode;
			var statusNode;
			var buttonWidget;

			put(domNode, 'h1', 'Welcome to Tab 1!');

			buttonWidget = new Button({
				label: 'Click me!'
			});
			buttonWidget.on('click', function () {
				put(statusNode, 'li', 'Button was clicked.');
			});
			buttonWidget.placeAt(domNode);

			statusNode = put(domNode, 'ol.status');
		}
	});
});
