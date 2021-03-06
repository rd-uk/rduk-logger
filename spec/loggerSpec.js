/**
 * MIT License
 *
 * Copyright (c) 2017 RDUK <tech@rduk.fr>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* eslint-env jasmine */

'use strict'

describe('logger', function () {
  let levels = ['error', 'warn', 'info', 'verbose', 'debug']

  describe('base provider', function () {
    const Base = require('../lib/provider/base')
    let logger = new Base({name: 'default', providers: []})

    describe('log methods', function () {
      it('should thrown NotImplementedError', function () {
        levels.forEach(function (level) {
          expect(function () {
            logger[level]()
          }).toThrowError()
        })
      })
    })
  })

  describe('log methods', function () {
    const logger = require('../lib')

    it('should have been called', function () {
      levels.forEach(function (level) {
        spyOn(logger, level).and.callThrough()
        logger[level]('test')
        expect(logger[level]).toHaveBeenCalled()
      })
    })
  })

  describe('section property, without config', function () {
    const logger = require('../lib')

    it('should return the default one', function () {
      spyOn(logger, 'getConfiguration').and.returnValue(null)
      logger.flush()
      expect(logger.section).toBeDefined()
    })
  })
})
