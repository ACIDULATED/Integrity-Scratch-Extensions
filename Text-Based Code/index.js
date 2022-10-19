
// create by scratch3-extension generator
const ArgumentType = Scratch.ArgumentType;
const BlockType = Scratch.BlockType;
const formatMessage = Scratch.formatMessage;
const log = Scratch.log;

const menuIconURI = "data:image/png;base64,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";
const blockIconURI = "data:image/png;base64,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";

class textcode{
  constructor (runtime){
    this.runtime = runtime;
    // communication related
    this.comm = runtime.ioDevices.comm;
    this.session = null;
    this.runtime.registerPeripheralExtension('textcode', this);
    // session callbacks
    this.reporter = null;
    this.onmessage = this.onmessage.bind(this);
    this.onclose = this.onclose.bind(this);
    this.write = this.write.bind(this);
    // string op
    this.decoder = new TextDecoder();
    this.lineBuffer = '';
  }

  onclose (){
    this.session = null;
  }

  write (data, parser = null){
    if (this.session){
      return new Promise(resolve => {
        if (parser){
          this.reporter = {
            parser,
            resolve
          }
        }
        this.session.write(data);
      })
    }
  }

  onmessage (data){
    const dataStr = this.decoder.decode(data);
    this.lineBuffer += dataStr;
    if (this.lineBuffer.indexOf('\n') !== -1){
      const lines = this.lineBuffer.split('\n');
      this.lineBuffer = lines.pop();
      for (const l of lines){
        if (this.reporter){
          const {parser, resolve} = this.reporter;
          resolve(parser(l));
        };
      }
    }
  }

  scan (){
    this.comm.getDeviceList().then(result => {
        this.runtime.emit(this.runtime.constructor.PERIPHERAL_LIST_UPDATE, result);
    });
  }

  getInfo (){
    return {
      id: 'textcode',
      name: 'TextCode',
      color1: '#ff0041',
      color2: '#ff0004',
      menuIconURI: menuIconURI,
      blockIconURI: blockIconURI,
      blocks: [
        {
          opcode: 'txtcodeblock',
          blockType: BlockType.COMMAND,
          arguments: {
            code: {
              type: ArgumentType.STRING
            }
          },
          text: 'text-based code [code]'
        }
      ]
    }
  }

txtcodeblock (args, util) {
  const code = args.code;
  util.target.setXY(targetXY[0], targetXY[1]);
  return this.write(`M0 \n`);
}

}

module.exports = textcode;
