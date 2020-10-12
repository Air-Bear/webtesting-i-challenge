// const { test, expect } = require('@jest/globals');
// const { describe } = require('yargs');
// const { repair } = require('./enhancer.js');
const enhancer = require('./enhancer.js');

describe("enhancer.js tests", () => {
    describe("repair() tests", () => {
        it("should change durability to 100", () => {
            var item = {
                name: "test sword",
                durability: 50,
                enhancement: 1
            };

            expect(enhancer.repair(item)).toStrictEqual({
                name: "test sword",
                durability: 100,
                enhancement: 1
            });;
        });
    });

    describe("success() tests", () => {
        it("should increase enhancement level by 1", () => {
            var item = {
                name: "test sword",
                durability: 50,
                enhancement: 1
            }

            var expected = {
                name: "test sword",
                durability: 50,
                enhancement: 2
            }

            expect(enhancer.success(item)).toStrictEqual(expected);
        });

        it("should not enhance past level 20", () => {
            var item = {
                name: "test sword",
                durability: 50,
                enhancement: 20
            }

            expect(enhancer.success(item)).toStrictEqual(item);
        })
    });

    describe("fail() tests", () => {
        it("should decrease durability by 5 when enhance < 15", () => {
            var item = {
                name: "test sword",
                durability: 50,
                enhancement: 1
            }

            var expected = {
                name: "test sword",
                durability: 45,
                enhancement: 1
            }

            expect(enhancer.fail(item)).toStrictEqual(expected);
        });

        it("should decrease durability by 10 when enhance >= 15", () => {
            var item = {
                name: "test sword",
                durability: 50,
                enhancement: 15
            }

            var expected = {
                name: "test sword",
                durability: 40,
                enhancement: 15
            }

            expect(enhancer.fail(item)).toStrictEqual(expected);
        });

        it("should decrease enhancement on fail when enhance > 15", () => {
            var item = {
                name: "test sword",
                durability: 50,
                enhancement: 17
            }

            var expected = {
                name: "test sword",
                durability: 40,
                enhancement: 16
            }

            expect(enhancer.fail(item)).toStrictEqual(expected);
        })
    });
});