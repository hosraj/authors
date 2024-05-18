import { Article, ArticleType } from './article.model';

export const ARTICLES: Article[] = [
    { id: 1,authorId:1 , type: ArticleType.Article, title: 'Article One', createdOn: new Date() },
    { id: 2,authorId:1 , type: ArticleType.Book, title: 'Book One', createdOn: new Date() },
    { id: 3,authorId:1 , type: ArticleType.Article, title: 'Article Two', createdOn: new Date() },
    { id: 4,authorId:2 , type: ArticleType.Article, title: 'Article Tree', createdOn: new Date() },
    { id: 5,authorId:2 , type: ArticleType.Book, title: 'Book Two', createdOn: new Date() },
    { id: 6,authorId:2 , type: ArticleType.Article, title: 'Article x', createdOn: new Date() },
    { id: 7,authorId:3 , type: ArticleType.Article, title: 'Article x', createdOn: new Date() },
    { id: 8,authorId:3 , type: ArticleType.Article, title: 'Article Two', createdOn: new Date() },
    { id: 9,authorId:3 , type: ArticleType.Article, title: 'Article Tree', createdOn: new Date() },

];
