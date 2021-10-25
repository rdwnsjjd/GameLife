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


$("document").ready(function () {
        
    class Cell {
        constructor(id) {
            this.id          = id;
            this.is_live     = false;
            this.population  = 0;
            this.prev_status = false;
        }

        live() {
            this.is_live = true;
            $("#" + this.id + "").css("opacity", "1");

            if (this.prev_status == false) {
                if (this.id < 725) cells[this.id + 1].population++;
                if (this.id > 0)   cells[this.id - 1].population++;
                if (this.id > 28)  cells[this.id - 29].population++;
                if (this.id > 27)  cells[this.id - 28].population++;
                if (this.id > 29)  cells[this.id - 30].population++;
                if (this.id < 695) cells[this.id + 29].population++;
                if (this.id < 694) cells[this.id + 30].population++;
                if (this.id < 696) cells[this.id + 28].population++;
                this.prev_status = true;
            }
        }

        die() {
            this.is_live = false;
            $("#" + this.id + "").css("opacity", "0.4");

            if (this.id == 66) {
                console.log("");
            }

            if (this.prev_status == true) {
                if (this.id < 724) cells[this.id + 1].population--;
                if (this.id > 0)   cells[this.id - 1].population--;
                if (this.id > 29)  cells[this.id - 29].population--;
                if (this.id > 28)  cells[this.id - 28].population--;
                if (this.id > 30)  cells[this.id - 30].population--;
                if (this.id < 696) cells[this.id + 29].population--;
                if (this.id < 695) cells[this.id + 30].population--;
                if (this.id < 697) cells[this.id + 28].population--;
                this.prev_status = false;
            }
        }
    }

    let cells = [];

    for (let index = 0; index < 725; index++) {
        $(".main").append("<div class='cell' id='" + index + "'><div>");
        let cell = new Cell(index);
        cells.push(cell);
    }

    $(document).on("click", ".cell", function (e) { 
        let id = $(this).attr('id');

        if (cells[id].is_live) {
            cells[id].die();
        }
        else {
            cells[id].live();
        }
    })

    let clicked = false;
    let interv;
    $(".c").on("click", function () {
        let status = [];
        
        if (!clicked) {
            clicked = true;
            interv = setInterval(function (params) {
                console.log("LOOP");
                for (let index = 0; index < 725; index++) {
                    const element = cells[index];

                    if (element.is_live == false) {
                        status[index] = false;
                        if (element.population == 3) {
                            // element.live()
                            status[index] = true;
                        }
                    }
                    else {
                        status[index] = true;
                        if (element.population < 2 || element.population > 3) {
                            // element.die()
                            status[index] = false;
                        }
                    }
                }

                for (let index = 0; index < 725; index++) {
                    const element = cells[index];
                    if (status[index]) {
                        if (!element.prev_status) {
                            element.live();
                        }
                    }
                    else {
                        if (element.prev_status) {
                            element.die();
                        }
                    }
                }
            }, 100);
        }

        else {
            clicked = false;
            clearInterval(interv);
        } 
    })
})
