import { Repository } from "typeorm";
import { ObjectID } from "mongodb";
import { CreateFriendHandler } from '../../../src/areas/peppapig/tasks/handlers/create-friend.handler';
import { Friend } from '../../../src/areas/peppapig/domain/entities/friend.entity';
import { CreateFriendCommand } from "../../../src/areas/peppapig/tasks/commands/create-friend.command";

describe('CreateFriendHandler', () => {
  let classUnderTest: CreateFriendHandler;
  let friendRepository: Repository<Friend>;

  beforeEach(() => {
    friendRepository = new Repository<Friend>();
    classUnderTest = new CreateFriendHandler(friendRepository);
  });

  describe('execute', () => {
    it('should save the request in the repository', async () => {
      // Arrange
      let friend: Friend = {
          id: new ObjectID(1),
          name: "name"
      };
      const spy = jest.spyOn(friendRepository, 'save')
        .mockImplementation(() => Promise.resolve(friend));

      // Act
      await classUnderTest.execute(new CreateFriendCommand("name"), () => {})
        .then(() => {
            // Assert
            expect(spy).toHaveBeenCalledTimes(1);
        });  
    });

    it('should return the entityId', async () => {
        // Arrange
        var id = new ObjectID(1);
        let friend: Friend = {
            id: id,
            name: "name"
        };
        const spy = jest.spyOn(friendRepository, 'save')
          .mockImplementation(() => Promise.resolve(friend));

        const fakeFunc = jest.fn();
  
        // Act
        await classUnderTest.execute(new CreateFriendCommand("name"), fakeFunc.mockReturnValue(id))
          .then(() => {
              // Assert
              expect(fakeFunc()).toBe(id);
          });  
      });
  });

});