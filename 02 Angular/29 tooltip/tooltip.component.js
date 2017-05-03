class TooltipComponent {
    constructor(di, $element) {
        console.log("TooltipComponent.ctor");

        di.value("tooltipService", this);

        this.visible = false;
    }

    show(text) {
        this.text = text;
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }
}

appModule.component("myTooltip", {
    controller: TooltipComponent,
    template: `<div class="content" ng-show="$ctrl.visible">{{$ctrl.text}}</div>`,
    // templateUrl: "tooltip.component.html"
});
