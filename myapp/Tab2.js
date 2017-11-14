define([
	'put-selector/put',
	'@dojo/widget-core/WidgetBase',
	'@dojo/widgets/button/Button',
	'@dojo/widget-core/d',
	'@dojo/widget-core/mixins/Projector',
	'@dojo/widgets/themes/dojo/theme',
	'./Tab'
], function(put, WidgetBase, Button, d, Projector, theme, Tab) {
	var w = d.w;
	var v = d.v;
	var ProjectorMixin = Projector.ProjectorMixin;
	var dojoTheme = theme.dojoTheme;
	var Dojo2Button = Button.default;

	return Tab.createSubclass({
		title: 'Tab 2',

		_statusNode: null,

		buildRendering: function() {
			this.inherited(arguments);

			var domNode = this.domNode;
			var statusNode;
			var buttonWidget;

			put(domNode, 'h1', 'Welcome to Tab 1!');
			this.renderButton(put(domNode, 'div'));
			this._statusNode = put(domNode, 'ol.status');
		},

		addButtonClickStatus: function() {
			put(this._statusNode, 'li', 'Button was clicked.');
		},

		renderButton: function(rootNode) {
			var ButtonProjector = ProjectorMixin(WidgetBase.default);
			var addButtonClickStatus = this.addButtonClickStatus.bind(this);
			ButtonProjector.prototype.render = function() {
				console.log('Here!');
				return w(Dojo2Button, {
					theme: dojoTheme,
					onClick: addButtonClickStatus
				}, [ 'Click Me Too!' ]);
			};
			var projector = new ButtonProjector();
			projector.replace(rootNode);
		}
	});
});
