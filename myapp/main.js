define([
	'dojo/on',
	'dijit/layout/TabContainer',
	'put-selector/put',
	'./Tab1',
	'./Tab2',
	'dojo/domReady!'
], function(on, TabContainer, put, Tab1, Tab2) {
	return {
		tabContainer: null,

		start: function(rootNode) {
			var resetNode = put(rootNode, 'div.resetButton', 'Reset');
			on(resetNode, 'click', function () {
				this.createTabContainer(rootNode);
			}.bind(this));

			this.createTabContainer(rootNode);
		},

		createTabContainer: function (parentNode) {
			var tabContainer = this.tabContainer;
			if (tabContainer) {
				tabContainer.destroyRecursive();
			}

			tabContainer = this.tabContainer = new TabContainer({
				'classname': 'MyApp'
			});
			tabContainer.placeAt(parentNode);
			tabContainer.startup();

			tabContainer.addChild(new Tab1());
			tabContainer.addChild(new Tab2());
		}
	}
});
