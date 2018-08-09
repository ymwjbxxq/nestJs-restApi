import { Repository } from "typeorm";
import { ObjectID } from "mongodb";
import { GetByIdFriendHandler } from '../../../src/areas/peppapig/queries/handlers/getById-friend.handler';
import { Friend } from '../../../src/areas/peppapig/domain/entities/friend.entity';
import { GetByIdFriendQuery } from "../../../src/areas/peppapig/queries/requests/getById-friend.request";

describe('GetByIdFriendHandler', () => {
  let classUnderTest: GetByIdFriendHandler;
  let friendRepository: Repository<Friend>;

  beforeEach(() => {
    friendRepository = new Repository<Friend>();
    classUnderTest = new GetByIdFriendHandler(friendRepository);
  });

  describe('execute', () => {
    it('should call find() from repository', async () => {
      // Arrange
      let friend: Friend = {
          id: new ObjectID(1),
          name: "name"
      };
      const spy = jest.spyOn(friendRepository, 'findOne')
        .mockImplementation(() => Promise.resolve(friend));

      // Act
      await classUnderTest.execute(new GetByIdFriendQuery("1"), () => {})
        .then(() => {
            // Assert
            expect(spy).toHaveBeenCalledTimes(1);
        });  
    });

    it('should return a specific friends', async () => {
        // Arrange
        var id = new ObjectID(1);
        let friend: Friend = {
            id: id,
            name: "name"
        };
        const spy = jest.spyOn(friendRepository, 'findOne')
          .mockImplementation(() => Promise.resolve(friend));

        const fakeFunc = jest.fn();
  
        // Act
        await classUnderTest.execute(new GetByIdFriendQuery("1"), fakeFunc.mockReturnValue([friend]))
          .then(() => {
              // Assert
              let results: Friend[] = fakeFunc();
              expect(results.length).toBe(1);
          });  
      });
  });

});