import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'src/app/shared/models/entry.model';
import { BlogService } from 'src/app/core/blog.service';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})

export class EntryListComponent implements OnInit {

  @Input() allEntries: Entry;

  constructor(
    private blogService: BlogService
  ) {}

  ngOnInit() {
  }

}
