import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GadgetService } from '../../services/gadget.service';
import { ModalWindowComponent } from '../../UI/modal-window/modal-window.component';
import { MatDialog } from '@angular/material/dialog';
import { BasketService } from '../../services/basket.service';
import { Location } from '@angular/common';
import { ProductPageFiltersService } from '../../services/product-page-filters.service';

@Component({
  selector: 'app-gadget-page',
  templateUrl: './gadget-page.component.html',
  styleUrl: './gadget-page.component.scss'
})
export class GadgetPageComponent implements OnInit {
  constructor(public route: ActivatedRoute, private router: Router, public gadgetService: GadgetService, public productFilters: ProductPageFiltersService, private basketService: BasketService, public dialog: MatDialog, private location: Location) { }

  ngOnInit(): void {
    if (this.route.snapshot.params.id <= this.gadgetService.gadgets.length) {
      this.gadgetService.getGadgetByID(this.route.snapshot.params.id)
      this.productFilters.getOtherGadgets(this.gadgetService.gadgets[this.route.snapshot.params.id - 1])
      this.productFilters.getMemoryCapacity(this.gadgetService.gadgets[this.route.snapshot.params.id - 1])
    }
    else {
      this.router.navigate(['/'])
    }

  }

  public navigateToOtherGadgets(id: number) {
    this.router.navigate([`gadget/${id}`])
    this.gadgetService.getGadgetByID(`${id}`)
  }

  public updateMemory(memoryCapacity: string) {
    this.productFilters.updateMemoryCapacity(this.gadgetService.gadget, memoryCapacity)
  }

  public back() {
    this.router.navigate(['/all-catalog'])
  }

  openModalOneClick() {
    window.scrollTo(0, 0)
    this.dialog.open(ModalWindowComponent, {
      data: {
        type: 'OneClick', title: this.gadgetService.gadget?.name + ' ' + this.gadgetService.gadget?.characteristics[1].value + ' '
          + this.gadgetService.gadget?.characteristics[1].unit_type + ' ' + this.gadgetService.gadget?.color, image: 'http://localhost:1452/' + this.gadgetService.gadget.images[0], price: this.gadgetService.gadget.price, discountPrice: this.gadgetService.gadget.discount_price
      }
    })
  }
  openModalBasketAdd() {
    window.scrollTo(0, 0)
    this.basketService.addToBasket({ id: this.gadgetService.gadget.id, title: this.gadgetService.gadget.name, image: 'http://localhost:1452/' + this.gadgetService.gadget.images[0], price: this.gadgetService.gadget.price, discountPrice: this.gadgetService.gadget.discount_price, count: 1, isInCart: true })
    this.dialog.open(ModalWindowComponent, {
      data: {
        type: 'BasketAdd', title: this.gadgetService.gadget?.name + ' ' + this.gadgetService.gadget?.characteristics[1].value + ' '
          + this.gadgetService.gadget?.characteristics[1].unit_type + ' ' + this.gadgetService.gadget?.color, image: 'http://localhost:1452/' + this.gadgetService.gadget.images[0]
      }
    })
  }
  openModalCredit() {
    window.scrollTo(0, 0)
    this.dialog.open(ModalWindowComponent, {
      data: {
        type: 'Credit', title: this.gadgetService.gadget?.name + ' ' + this.gadgetService.gadget?.characteristics[1].value + ' '
          + this.gadgetService.gadget?.characteristics[1].unit_type + ' ' + this.gadgetService.gadget?.color, image: 'http://localhost:1452/' + this.gadgetService.gadget.images[0], price: this.gadgetService.gadget.price, discountPrice: this.gadgetService.gadget.discount_price
      }
    })
  }
}
