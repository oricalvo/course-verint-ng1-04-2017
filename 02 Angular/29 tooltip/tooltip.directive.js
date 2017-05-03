class TooltipDirective {
    constructor($injector) {
        console.log("TooltipDirective.ctor");

        this.$injector = $injector;
        this.tooltipService = this.$injector.get("tooltipService");
    }

    link(scope, element, attrs) {
        console.log("tooltip.link", scope, attrs);

        this.scope = scope;

        element.on("mouseenter", this.onMouseEnter.bind(this));
        element.on("mouseleave", this.onMouseLeave.bind(this));
        element.on("mousemove", this.onMouseMove.bind(this));

        this.text = attrs.tooltip;
        console.log(this.text);
    }

    start() {
        this.timer = setTimeout(()=> {
            this.tooltipService.show(this.text);
            this.scope.$apply();
        }, 700);
    }

    stop() {
        if(this.timer) {
            clearTimeout(this.timer);
            this.timer = null;

            this.tooltipService.hide();
            this.scope.$apply();
        }
    }

    onMouseEnter() {
        this.start();
    }

    onMouseLeave() {
        this.stop();
    }

    onMouseMove() {
        this.stop();
        this.start();
    }
}

appModule.directive("tooltip", function($injector) {
    return {
        compile: function(element) {
            console.log("tooltip.compile");

            return function link(scope, element, attrs) {
                const dir = new TooltipDirective($injector);
                dir.link(scope, element, attrs);
            }
        }
    };
});
