import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';


export const routes: Routes = [
    { path: '', component:AuthorsComponent },
    { path: 'author/:id', component:AuthorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
