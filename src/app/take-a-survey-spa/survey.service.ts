import { EventEmitter } from "@angular/core";

export class SurveyService {
    pageSet = new EventEmitter<number>();
    private page: number = 0;

    getPage() {
        return this.page;
    }

    setPage(page: number) {
        this.page = page;
    }

    incrementPage() {
        this.page = this.page + 1;
    }

    decrementPage() {
        if (this.page - 1 >= 0) {
            this.page = this.page - 1;
        }
    }
}