import { CommandBus } from '@nestjs/cqrs';
import { PeppaPigController } from '../../../src/areas/peppapig/ui/controllers/peppaPig.controller';
import { FriendResponse } from '../../../src/areas/peppapig/queries/responses/friend.respone';
import { GetAllFriendQuery } from '../../../src/areas/peppapig/queries/requests/getall-friend.request';
import { GetByIdFriendQuery } from '../../../src/areas/peppapig/queries/requests/getById-friend.request';
import { CreateFriendCommand } from '../../../src/areas/peppapig/tasks/commands/create-friend.command';
import { FriendRequest } from '../../../src/areas/peppapig/ui/models/friend.request';


describe('PeppaPigController', () => {
  let classUnderTest: PeppaPigController;
  let commandBus: CommandBus;

  beforeEach(() => {
    commandBus = new CommandBus();
    classUnderTest = new PeppaPigController(commandBus);
  });

  describe('all', () => {
    it('should call GetAllFriendQuery and return something', async () => {
      // Arrange
      jest.spyOn(commandBus, 'execute')
        .mockImplementation(() => []);

      // Act
      let results:FriendResponse[] = await classUnderTest.all();

      // Assert
      expect(results.length).toBe(0);
    });

    it('should call GetAllFriendQuery', async () => {
        // Arrange
        const spy = jest.spyOn(commandBus, 'execute').mockImplementation(() => []);

        // Act
        await classUnderTest.all().then(() => {
            // Assert
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(new GetAllFriendQuery());
        });        
      });
  });

  describe('getBy', () => {
    it('should call GetByIdFriendQuery and return something', async () => {
      // Arrange
      jest.spyOn(commandBus, 'execute')
        .mockImplementation(() => new FriendResponse());

      // Act
      let result:FriendResponse = await classUnderTest.get("1");

      // Assert
      expect(result).toBeInstanceOf(FriendResponse);
    });

    it('should call GetByIdFriendQuery', async () => {
        // Arrange
        const spy = jest.spyOn(commandBus, 'execute').mockImplementation(() => []);

        // Act
        await classUnderTest.get("1").then(() => {
            // Assert
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(new GetByIdFriendQuery("1"));
        });        
      });
  });

  describe('create', () => { 
    it('should call CreateFriendCommand', async () => {
        // Arrange
        const spy = jest.spyOn(commandBus, 'execute').mockImplementation(() => Promise.resolve("id"));
        let response: any = {
            setHeader: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
        };

        let request:FriendRequest= {
            name: "dsfsdfsd"
        };

        // Act
        await classUnderTest.create(request, response).then(() => {
            // Assert
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(new CreateFriendCommand(request.name));
        });        
    });
  });
});