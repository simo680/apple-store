import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalWindowComponent } from '../../UI/modal-window/modal-window.component';
import { BasketService } from '../../services/basket.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../types/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './search-result.component.scss', './catalog.component.scss']
})
export class HeaderComponent implements OnInit {
  public isHeaderOpen = false;
  public count: number = 0;
  public catalogs: [string, Product[]][] = [];
  public isCatalogOpen: boolean = false;
  public catalogCategoryId: null | string = null;
  public searchResultText: string = '';
  public isSearchResult: boolean = false;
  public searchedResultList: Product[] = [];

  constructor(
    public dialog: MatDialog,
    public basketService: BasketService,
    public productService: ProductService
  ) { }

  async ngOnInit(): Promise<void> {
    const categories = await this.productService.getAllCategories();
    this.catalogs = categories;
    this.count = this.basketService.basket.length > 0 ? this.basketService.basket.map(el => el.count)[0] : 0;
  }

  private isError(categories: any): categories is [{ errorMessage: string }] {
    return Array.isArray(categories) && categories.length > 0 && 'errorMessage' in categories[0];
  }

  public openHeader(): void {
    this.isHeaderOpen = !this.isHeaderOpen;
  }

  public openModalCallback(): void {
    window.scrollTo(0, 0);
    this.dialog.open(ModalWindowComponent, { data: { type: 'CallBack' } });
  }

  public openModalTradeIn(): void {
    window.scrollTo(0, 0);
    this.dialog.open(ModalWindowComponent, { data: { type: 'Trade-In' } });
  }

  public openModalBasket(): void {
    window.scrollTo(0, 0);
    this.dialog.open(ModalWindowComponent, { data: { type: 'Basket' } });
  }

  public getCatalogNames(): string[] | undefined {
    if (!this.isError(this.catalogs)) {
      return this.catalogs.map(catalog => catalog[0]);
    }
  }

  public getCatalogProducts(): Product[] {
    if (this.isError(this.catalogs)) {
      return [];
    }
    const categoryProductsToFind = this.catalogs.find(
      (catalog): catalog is [string, Product[]] => catalog[0] === this.catalogCategoryId
    );
    return categoryProductsToFind ? categoryProductsToFind[1] : [];
  }

  public changeCatalogCategoryId(newVal: null | string): void {
    this.catalogCategoryId = newVal;
  }

  public changeIsCatalogOpen(newVal?: boolean): void {
    this.isCatalogOpen = newVal !== undefined ? newVal : !this.isCatalogOpen;
    this.changeCatalogCategoryId(null);
  }

  public changeIsSearchResult(newState: boolean): void {
    this.isSearchResult = newState;
  }

  public async getSearchResult(): Promise<void> {
    this.searchedResultList = await this.productService.getSearchedProducts(this.searchResultText);
  }

  public removeSearchResultText(): void {
    this.searchResultText = '';
  }
}
