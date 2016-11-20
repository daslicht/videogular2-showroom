import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SinglePlayerComponent } from "./single-player.component";
import { VgCore } from "videogular2/core";
import { VgControlsModule } from "videogular2/controls";
import { VgOverlayPlayModule } from "videogular2/overlay-play";
import { VgBufferingModule } from "videogular2/buffering";


@NgModule({
    imports: [
        CommonModule,
        VgCore,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule
    ],
    declarations: [ SinglePlayerComponent ]
})
export class SinglePlayerModule {
}