import { Component, ElementRef, HostListener, OnInit, ViewChild, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IUser } from '../../models/interfaces';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,SearchPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private api = inject(ApiService);

  public users: IUser[] = [];
  public searchValue:string=''

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers = () => {
    this.api.getUsers()
      .subscribe(res => this.users = res);
  };

  @ViewChild("search")
  private searchInput: ElementRef<HTMLInputElement> | null = null;

  @HostListener("window:keydown", ["$event"])
  private shortCutKey(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      this.searchInput?.nativeElement.focus();
    }
  }
}
