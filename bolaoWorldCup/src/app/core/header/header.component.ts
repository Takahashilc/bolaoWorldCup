import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'bwc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faCircle = faCircleUser;

  user$!: Observable<IUsuario>;
  user!: IUsuario;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.user$ = usuarioService.getUser();
    this.user$.subscribe((user) => (this.user = user));
  }

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['login']);
  }

  ngOnInit(): void {}
}
