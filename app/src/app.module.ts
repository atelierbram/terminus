import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { ToasterModule } from 'angular2-toaster'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { ConfigService } from 'services/config'
import { ElectronService } from 'services/electron'
import { HostAppService } from 'services/hostApp'
import { LogService } from 'services/log'
import { HotkeysService } from 'services/hotkeys'
import { ModalService } from 'services/modal'
import { NotifyService } from 'services/notify'
import { QuitterService } from 'services/quitter'
import { SessionsService } from 'services/sessions'
import { LocalStorageService } from 'angular2-localstorage/LocalStorageEmitter'

import { AppComponent } from 'components/app'
import { CheckboxComponent } from 'components/checkbox'
import { HotkeyInputComponent } from 'components/hotkeyInput'
import { HotkeyDisplayComponent } from 'components/hotkeyDisplay'
import { HotkeyHintComponent } from 'components/hotkeyHint'
import { HotkeyInputModalComponent } from 'components/hotkeyInputModal'
import { SettingsModalComponent } from 'components/settingsModal'
import { TerminalComponent } from 'components/terminal'


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ToasterModule,
        NgbModule.forRoot(),
    ],
    providers: [
        ConfigService,
        ElectronService,
        HostAppService,
        HotkeysService,
        LogService,
        ModalService,
        NotifyService,
        QuitterService,
        SessionsService,
        LocalStorageService,
    ],
    entryComponents: [
        HotkeyInputModalComponent,
        SettingsModalComponent,
    ],
    declarations: [
        AppComponent,
        CheckboxComponent,
        HotkeyDisplayComponent,
        HotkeyHintComponent,
        HotkeyInputComponent,
        HotkeyInputModalComponent,
        SettingsModalComponent,
        TerminalComponent,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}