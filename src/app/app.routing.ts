import { NgModule,OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
    
    { path: '', redirectTo: '/Applications', pathMatch: 'full' },
    { path: '**', redirectTo: '/Applications' }
];

@NgModule ({
    imports: [ RouterModule.forRoot(appRoutes, {useHash: true}) ],
    exports: [ RouterModule ]
})

export class AppRouting {}
