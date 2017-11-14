define([
	'dojo/_base/declare',
	'@dojo/widget-core/WidgetBase',
	'@dojo/widgets/button/Button',
	'@dojo/widget-core/d',
	'@dojo/widget-core/mixins/Projector',
	'dijit/form/Button',
	'put-selector/put',
	'./Tab'
], function (declare, WidgetBase, Button2, d, Projector, Button, put, Tab) {
	var w = d.w;
	var v = d.v;
	var ProjectorMixin = Projector.ProjectorMixin;
	var Dojo2Button = Button2.default;

	return Tab.createSubclass({
		title: 'Simple Button Clicks',

		buildRendering: function () {
			this.inherited(arguments);

			this.renderDojo1Button();
			this.renderDojo2Button();
		},

		renderDojo1Button: function () {
			var domNode = this.domNode;
			var statusNode;
			var buttonWidget;

			put(domNode, 'div strong', 'Dojo 1 button');

			buttonWidget = new Button({
				label: 'Click me!'
			});
			buttonWidget.on('click', function () {
				put(statusNode, 'li', 'Button 1 was clicked.');
			});
			buttonWidget.placeAt(domNode);

			statusNode = put(domNode, 'ol.status');
		},

		renderDojo2Button: function () {
			var domNode = this.domNode;
			var statusNode;
			var ButtonProjector;
			var projector;

			function addButtonClickStatus() {
				put(statusNode, 'li', 'Button 2 was clicked.');
			}

			ButtonProjector = declare(ProjectorMixin(WidgetBase.default), {
				render: function () {
					return w(Dojo2Button, {
						onClick: addButtonClickStatus
					}, [ 'Click Me Too!' ]);
				}
			});
			projector = new ButtonProjector();
			projector.append(domNode);
			this.own(projector);

			statusNode = put(domNode, 'ol.status');
		}
	});
});
