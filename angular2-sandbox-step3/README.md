# angular2-sandbox
Step 3 : Our first component

The old way : 
---

- Create new folder in src/app/firstcomponent
in src/app/firstcomponent add app.firstcomponent.ts, app.firstcomponent.html and app.firstcomponent.css

- Add the code bellow in app.firstcomponent.ts : 
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './app.firstcomponent.html',
  styleUrls: ['./app.firstcomponent.css']
})
export class AppFirstComponent {
  title = 'component works!';
}
```

- Add in app.firstcomponent.html : 
```
{{title}}
```

- Its not enough, we have now to declare the component in app.module.ts : 
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppFirstComponent } from './firstcomponent/app.firstcomponent';

@NgModule({
  declarations: [
    AppComponent,
    AppFirstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppFirstComponent]
})
export class AppModule { }
```

Care about cache the first time you had a component !

![alt tag](http://vanhouteghem-jonathan.fr/wp-content/uploads/2016/11/Angular2SandboxStep3.png)