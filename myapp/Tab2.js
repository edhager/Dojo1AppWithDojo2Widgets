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

	function makeButtonLabel(count) {
		return 'Clicked ' + count + ' times';
	}

	return Tab.createSubclass({
		title: 'Button Label Changes',

		buildRendering: function () {
			this.inherited(arguments);

			this.renderDojo1Button();
			this.renderDojo2Button();
		},

		renderDojo1Button: function () {
			var domNode = this.domNode;
			var clickCount = 0;

			var buttonWidget = new Button({
				label: makeButtonLabel(clickCount)
			});
			buttonWidget.on('click', function () {
				clickCount++;
				buttonWidget.set('label', makeButtonLabel(clickCount));
			});
			buttonWidget.placeAt(domNode);
		},

		renderDojo2Button: function () {
			var domNode = this.domNode;
			var ButtonProjector;
			var button;
			var clickCount = 0;

			function buttonClickHandler() {
				clickCount++;
				button.invalidate();
			}

			ButtonProjector = declare(ProjectorMixin(WidgetBase.default), {
				render: function () {
					return w(Dojo2Button, {
						onClick: buttonClickHandler
					}, [ makeButtonLabel(clickCount) ]);
				}
			});
			button = new ButtonProjector();
			button.append(domNode);
			this.own(button);
		}
	});
});
