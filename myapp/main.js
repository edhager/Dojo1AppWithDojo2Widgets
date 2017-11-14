define([
	'dijit/layout/TabContainer',
	'./Tab1',
	'./Tab2',
	'dojo/domReady!'
], function(TabContainer, Tab1, Tab2) {
	return {
		start: function(rootNode) {
			var tabContainer = this.tabContainer = new TabContainer({
				'classname': 'MyApp'
			});
			tabContainer.placeAt(rootNode);
			tabContainer.startup();

			tabContainer.addChild(new Tab1());
			tabContainer.addChild(new Tab2());
		}
	}
});
