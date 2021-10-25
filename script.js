// Copyright (C) 2021 Redwan
// 
// This file is part of lifeGame.
// 
// lifeGame is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// lifeGame is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with lifeGame.  If not, see <http://www.gnu.org/licenses/>.

$(document).ready(function(){

    class Cell {
        constructor(size, is_live) {
            this.size    = size;
            this.is_live = is_live;
        }
    
        live() {
            this.is_live = true;
            
        }
    
        die() {
            this.is_live = false;
        }
    }
});

