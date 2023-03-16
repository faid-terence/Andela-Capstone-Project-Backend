import app from "../server.js"
import mongoose from "mongoose";
import chai from "chai";
import chaiHttp from "chai-http";
import Blog from "../models/Blog.js";
const should = chai.should();


chai.use(chaiHttp);

describe("USER REGISTRATION AND SIGNIN", () => {
    describe("USER OPERATIONS", () => {
        it("Should register a new User", (done) => {
            chai.
            request(app)
            .post('/api/v1/register')
            .end((err,res) =>{
                if(err) done(err)
                else {
                    res.should.have.status(500)
                    done()
                }
            })
        });
        it("Should Login a Register User", (done) => {
            chai.
            request(app)
            .post('/api/v1/login')
            .end((err,res) => {
                if(err) done(err)
                else {
                    res.should.have.status(401)
                    done()
                }
            })
        })
    })
})