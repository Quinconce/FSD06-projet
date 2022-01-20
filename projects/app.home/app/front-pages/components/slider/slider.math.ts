
import grid from '../../../../style/lib-grid'


//faire un tri la dedans car possible que une seule interface suffise
export interface RegularSliderSettings {
    type: 'regular';
    mobile: {
        marginRight: number,
        marginLeft: number,
        sizeCard: number,
    };
    tablet: {
        marginRight: number,
        marginLeft: number,
        sizeCard: number,
    };
    desktop: {
        marginRight: number,
        marginLeft: number,
        sizeCard: number,
    };
}

export interface FullWidthSliderSettings {
    type: 'fullWidth';
    mobile: {
        marginRight: number,
        marginLeft: number,
        sizeCard: number,
    };
    tablet: {
        marginRight: number,
        marginLeft: number,
        sizeCard: number,
    };
    desktop: {
        marginRight: number,
        marginLeft: number,
        sizeCard: number,
    };
}


export type SliderSettings = RegularSliderSettings | FullWidthSliderSettings;


export interface CompiledSettings{
    marginLeft: number,
    marginRight: number,
    sizeCard: number,
    screensize: number
}

//recupère la taille de l'ecran pour renvoyer les marges necessaires
export function compileSettingsForScreenSize(settings: SliderSettings,
                                             screenSize: number,
                                             ElementScrolable: number):
                                             CompiledSettings{


    let marginLeft;
    let marginRight;
    let sizeCard;

    if (window.innerWidth > grid.maxWidth){
        screenSize = grid.maxWidth
    }else if (window.innerWidth < grid.minWidth) {
        screenSize = grid.minWidth
    }

    if (screenSize < grid.tabletWidth){
        marginLeft = settings.mobile.marginLeft
        sizeCard = settings.mobile.sizeCard
        marginRight = settings.mobile.marginRight
    }else if (screenSize >= grid.tabletWidth && screenSize < grid.desktopWidth) {
        marginLeft = settings.tablet.marginLeft
        sizeCard = settings.tablet.sizeCard
        marginRight = settings.tablet.marginRight
    }else{
        marginLeft = settings.desktop.marginLeft
        sizeCard = settings.desktop.sizeCard
        marginRight = settings.desktop.marginRight
    }

    if (settings.type === 'fullWidth'){
        sizeCard = ElementScrolable
        screenSize = sizeCard
    }




    return {
        marginLeft, marginRight, sizeCard, screensize: screenSize
    };
}

export function getScrollPositionForItem(item: number,
                                         settings: CompiledSettings): number{

    const sizeOnContainer = settings.marginRight + settings.sizeCard
    const sizeToScroll =
    (settings.marginLeft + (sizeOnContainer * item) +
    (settings.sizeCard / 2)) - (settings.screensize / 2)

    return sizeToScroll
}

//
export function GetMyPosition(info: CompiledSettings, ScrollableELement: HTMLElement): number{
    const sizecontainer = info.sizeCard + info.marginRight
    const sizeFirstElement = info.sizeCard + info.marginLeft + 32
    const percentScroll = ScrollableELement.scrollLeft + (info.screensize / 2)
    const positionOnElement = Math.ceil((percentScroll - sizeFirstElement) / sizecontainer)

    return positionOnElement
}

