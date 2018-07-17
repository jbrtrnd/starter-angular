import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StarterModule } from 'app/starter/starter.module';
import { UserModule } from 'app/user/user.module';

@NgModule({
    declarations: [],
    imports: [BrowserModule, HttpClientModule, StarterModule, UserModule],
    providers: [],
    bootstrap: [],
})
export class AppModule {}
